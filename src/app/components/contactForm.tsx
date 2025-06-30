'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import SubmitButton from './submitButton'
import FloatingMessage from './floatingMessage'
import { TextInput } from './textInput'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const t = useTranslations('Contact')
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError(null)
    setStatus(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError(t('errorRequired'))
      return
    }
    if (!formData.name.trim()) {
      setError(t('errorName'))
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email) || formData.email.length > 254) {
      setError(t('errorEmail'))
      return
    }

    setIsSubmitting(true)
    setStatus(null)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || t('errorSend'))
      }

      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
    } catch (err: any) {
      setStatus('error')
      setError(err.message || t('errorSend'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='max-w-[500px] mx-auto mb-12 px-4'>
        <h2 className='py-6 text-xl text-center lg:text-transparent mx-auto w-full tracking-wider font-semibold'>
          {t('title')}
        </h2>

        <TextInput
          label={t('nameLabel')}
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder={t('namePlaceholder')}
        />

        <TextInput
          label={t('emailLabel')}
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder={t('emailPlaceholder')}
        />

        <TextInput
          label={t('messageLabel')}
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder={t('messagePlaceholder')}
          textarea
        />

        <div className='h-18 sm:h-12'>{error && <p className='text-red-600'>{error}</p>}</div>

        <div className='flex flex-row-reverse'>
          <SubmitButton text={t('sendButton')} isSubmitting={isSubmitting} />
        </div>
      </form>

      {status === 'success' && (
        <FloatingMessage message={t('success')} type='success' onClose={() => setStatus(null)} />
      )}
      {status === 'error' && !error && (
        <FloatingMessage message={t('errorSend')} type='error' onClose={() => setStatus(null)} />
      )}
    </>
  )
}
