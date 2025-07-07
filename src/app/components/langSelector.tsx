'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'

type LangSelectorProps = {
  isMobile?: boolean
}

const locales = ['en', 'es']

export default function LangSelector({ isMobile = false }: LangSelectorProps) {
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|es)/, '')}`
    router.push(newPath)
    setOpen(false)
  }

  return (
    <div
      className={`relative flex justify-end ${isMobile ? 'flex-col-reverse w-full' : 'flex-row items-center'}`}
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={isMobile ? { opacity: 0, y: -16 } : { opacity: 0, x: 32 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 16 }}
            exit={isMobile ? { opacity: 0, y: -16 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${isMobile ? 'top-10 left-0' : 'right-full mr-2 top-0'} z-50`}
          >
            {locales
              .filter(l => l !== currentLocale)
              .map(locale => (
                <li key={locale}>
                  <button
                    onClick={() => switchLocale(locale)}
                    className='block px-4 py-2 text-md w-full font-light text-left uppercase cursor-pointer gap-0'
                  >
                    {locale}
                  </button>
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className='text-md font-normal uppercase px-4 py-2 cursor-pointer'
      >
        {currentLocale}
      </button>
    </div>
  )
}
