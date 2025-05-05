'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Route } from 'next'
import { menuLinks } from '../data/menuLinks'
import Image from 'next/image'

export default function NavLinks() {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [clickedLink, setClickedLink] = useState<string | null>(null)

  useEffect(() => {
    setClickedLink(null)
  }, [pathname])

  const handleLinkClick = (href: string) => {
    if (href !== pathname) {
      setClickedLink(href)
    }
  }

  const activeHref =
    hoveredLink ?? clickedLink ?? (menuLinks.some(link => link.href === pathname) ? pathname : '/')

  const activeLink = menuLinks.find(link => link.href === activeHref)

  return (
    <nav className='hidden lg:flex gap-8 text-xl font-light tracking-wider relative items-center'>
      {/* Logo SVG inline */}
      <Image
        src='/images/Logo.svg'
        alt='Logo'
        className='w-5 h-5 mr-[-12px] filter dark:invert'
        width={40}
        height={40}
      />

      {menuLinks.map(link => (
        <Link
          key={link.href}
          href={link.href as Route}
          className='relative'
          onMouseEnter={() => setHoveredLink(link.href)}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleLinkClick(link.href)}
        >
          {link.label}
        </Link>
      ))}

      <AnimatePresence>
        {activeLink && (
          <motion.div
            className='absolute bottom-0 h-[2px] bg-white'
            initial={false}
            layoutId='nav-indicator'
            animate={{
              width: activeLink.width,
              x: activeLink.x + 40,
              opacity: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 22,
              mass: 0.5
            }}
          />
        )}
      </AnimatePresence>
    </nav>
  )
}
