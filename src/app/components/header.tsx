'use client'
import Link from 'next/link'
import NavLinks from './navLinks'
import MobileMenu from './mobileMenu'

export default function Header() {
  return (
    <header className='grid grid-cols-[1fr_auto_1fr] items-center max-w-[1600px] gap-4 mx-auto w-full h-32 md:h-48 px-8 relative'>
      <div className='block lg:hidden'></div>

      <NavLinks />

      <Link href='/'>
        <h1 className='sm:whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[200] tracking-wider justify-self-center'>
          ANDRES PESCADER [ARQ]
        </h1>
      </Link>

      <MobileMenu />

      <div className='hidden lg:block'></div>
    </header>
  )
}
