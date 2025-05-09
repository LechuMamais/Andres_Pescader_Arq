'use client'
import { useState } from 'react'
import SubmitButton from './submitButton'
import FloatingMessage from './floatingMessage'
import Error from 'next/error'
import { TextInput } from './textInput'

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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError(null)
    setStatus(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError('Todos los campos son obligatorios.')
      return
    }

    if (!formData.name.trim()) {
      setError('El nombre no puede estar vacío')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email) || formData.email.length > 254) {
      setError('Por favor ingresa un email válido')
      return
    }

    setIsSubmitting(true)
    setStatus(null)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Error al enviar el mensaje')
      }

      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
    } catch (err: any) {
      setStatus('error')
      setError(err.message || 'Hubo un error al enviar el mensaje.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='max-w-[500px] mx-auto mb-12 px-4'>
        <h2 className='py-6 text-xl text-center lg:text-transparent mx-auto w-full tracking-wider font-semibold'>
          CONTACTO
        </h2>

        <TextInput
          label='Nombre'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Tu nombre...'
        />

        <TextInput
          label='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Tu email...'
        />

        <TextInput
          label='Mensaje'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Tu mensaje...'
          textarea
        />

        <div className='h-18 sm:h-12'>{error && <p className='text-red-600'>{error}</p>}</div>

        <div className='flex flex-row-reverse'>
          <SubmitButton text='Enviar' isSubmitting={isSubmitting} />
        </div>
      </form>

      {status === 'success' && (
        <FloatingMessage
          message='Tu mensaje fue enviado correctamente.'
          type='success'
          onClose={() => setStatus(null)}
        />
      )}

      {status === 'error' && !error && (
        <FloatingMessage
          message='Hubo un error al enviar tu mensaje.'
          type='error'
          onClose={() => setStatus(null)}
        />
      )}
    </>
  )
}
