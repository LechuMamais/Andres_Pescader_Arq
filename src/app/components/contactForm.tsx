'use client'
import { useState } from "react"
import { motion } from 'framer-motion';
import SubmitButton from "./submitButton";

interface FormData {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })

    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            setError('Por favor, completá todos los campos.')
            return
        }

        setError(null)
        console.log('Formulario enviado:', formData)
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-[500px] mx-auto mb-12 px-4'>
            <h2 className="py-6 text-xl text-center lg:text-transparent mx-auto w-full tracking-wider font-semibold">CONTACTO</h2>

            <label htmlFor="name">Name*</label>
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name..."
                className='w-full mb-4 md:mb-8 mt-2 px-3 py-3 md:px-6 md:py-4 bg-[#373737] rounded-xs
                focus:outline-none focus:ring-0
            focus:bg-[#4e4e4e] focus:border-transparent transition-colors duration-120'
            />

            <label htmlFor="email">Email*</label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email..."
                className='w-full mb-4 md:mb-8 mt-2 px-3 py-3 md:px-6 md:py-4 bg-[#373737] rounded-xs
                focus:outline-none focus:ring-0
            focus:bg-[#4e4e4e] focus:border-transparent transition-colors duration-120'
            />

            <label htmlFor="message">Message*</label>
            <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className='w-full mb-4 md:mb-8 mt-2 px-3 py-3 md:px-6 md:py-4 bg-[#373737] rounded-xs
                focus:outline-none focus:ring-0
            focus:bg-[#4e4e4e] focus:border-transparent transition-colors duration-120'
            />

            <div className="h-18 sm:h-12">
                {error && <p className='text-red-600'>{error}</p>}
            </div>

            <div className="flex flex-row-reverse">
                <SubmitButton text='Enviar' />
            </div>
        </form>
    )
}
