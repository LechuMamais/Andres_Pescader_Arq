import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ message: 'Faltan campos' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return NextResponse.json(
            { message: 'Por favor ingresa un email válido' },
            { status: 400 }
        )
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: 'Nuevo mensaje desde tu sitio web',
            html: `
        <h3>Nuevo mensaje de ${name}!</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `
        })

        return NextResponse.json({ message: 'Mensaje enviado correctamente' })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Error al enviar el mensaje' }, { status: 500 })
    }
}
