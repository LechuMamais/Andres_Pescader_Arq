import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata, Viewport } from 'next'
import '../globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { smooch_sans } from '../fonts'

export const metadata: Metadata = {
  title: 'Andres Pescader Arq',
  description: 'Portfolio profesional de arquitectura con proyectos residenciales y comerciales',
  category: 'architecture',
  keywords: ['Andres Pescader', 'Architecture', 'Portfolio', 'Arq', 'diseño', 'construcción']
}

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${smooch_sans.className} antialiased min-h-[120svh] w-[100svw] bg-black text-white flex flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className='flex justify-center w-full max-w-[1600px] h-full pb-16 mx-auto lg:px-8 flex-1 mb-16'>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
