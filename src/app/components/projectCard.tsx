'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Route } from 'next'
import { Proyecto } from '../types'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLocale } from 'next-intl'

interface Props {
  proyecto: Proyecto
  key: string
  index: number
}

export default function ProjectCard({ proyecto, key, index }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}/${proyecto.proy_id}` as Route}
      key={key}
      className='relative w-full aspect-[2/1]'
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.15,
          duration: 0.5,
          ease: 'easeOut'
        }}
        className='w-full h-full relative overflow-hidden'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Image
          className='w-full h-full object-cover transition duration-300'
          style={{
            filter: isHovered ? 'blur(4px) brightness(0.5)' : 'none',
            scale: isHovered ? 1.01 : 1
          }}
          src={proyecto.imagen?.asset?.url || '/placeholder.jpg'}
          alt={proyecto.titulo}
          width={760}
          height={350}
        />

        {/* Versión móvil/tablet - siempre visible en pantallas pequeñas */}
        <div className='lg:hidden absolute bottom-0 left-0 w-full h-10 z-10 flex items-center justify-center backdrop-blur-[4px] bg-[rgba(0,0,0,0.25)]'>
          <h3 className='text-2xl text-white font-semibold text-center px-4 tracking-wide z-20'>
            {proyecto.titulo}
          </h3>
        </div>

        {/* Versión desktop - solo visible en hover en pantallas grandes */}
        <AnimatePresence>
          {isHovered && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='hidden lg:block absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-2xl text-white font-semibold text-center px-4 tracking-wide z-20'
            >
              {proyecto.titulo}
            </motion.h3>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  )
}
