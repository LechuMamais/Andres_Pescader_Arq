import type { Metadata } from 'next'
import type { Viewport } from 'next'
import './globals.css'
import { smooch_sans } from './fonts'
import Footer from './components/footer'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Andres Pescader Arq',
  description: 'Portfolio profesional de arquitectura con proyectos residenciales y comerciales',
  category: 'arqhitecture',
  keywords: ['Andres Pescader', 'Architecture', 'Portfolio', 'Arq', 'diseño', 'construcción']
}

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${smooch_sans.className} antialiased min-h-[120svh] w-[100svw] bg-black text-white flex flex-col`}
      >
        <Header />
        <main className='flex justify-center w-full max-w-[1600px] h-full pb-16 mx-auto lg:px-8 flex-1 mb-24'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
