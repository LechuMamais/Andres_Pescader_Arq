import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from './fonts'
import { } from 'next/font/google'


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
      <body className={`${montserrat.className} antialiased`}>
        <div className=' flex justify-center w-full max-w-[1400px] h-full py-8 mx-auto md:px-8 min-h-[100svh] bg-black text-white'>
          {children}

        </div>
      </body>
    </html >
  )
}
