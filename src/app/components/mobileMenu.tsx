'use client'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        when: 'beforeChildren'
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <div className='flex justify-end lg:hidden'>
        <button className='z-50' onClick={() => setIsOpen(!isOpen)} aria-label='Menu'>
          <motion.div
            className='w-6 flex flex-col gap-1 cursor-pointer'
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
          >
            <motion.span
              className='h-0.5 w-full bg-white block'
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className='h-0.5 w-full bg-white block'
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
            <motion.span
              className='h-0.5 w-full bg-white block'
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={menuVariants}
            className='fixed inset-0 bg-black z-40 flex flex-col items-center justify-center text-2xl'
          >
            <motion.div variants={itemVariants}>
              <Link
                href='/'
                onClick={() => setIsOpen(false)}
                className='block py-6 px-8 tracking-wide'
              >
                WORK
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href='/contact'
                onClick={() => setIsOpen(false)}
                className='block py-6 px-8 tracking-wide'
              >
                CONTACT
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
