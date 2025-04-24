import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from './fonts'
import { } from 'next/font/google'
import Footer from './components/footer'
import Header from './components/header'


export const metadata: Metadata = {
  title: 'Andres Pescader Arq',
  description: 'Architecture Portfolio',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased min-h-[120svh] w-[100svw] bg-black text-white flex flex-col`}>
        <Header />
        <main className='flex justify-center w-full max-w-[1600px] h-full pb-16 mx-auto lg:px-8 flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html >
  )
}
