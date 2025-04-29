'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Route } from 'next'
import { Proyecto } from '../types'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Props {
  proyecto: Proyecto
}

export default function ProjectCard({ proyecto }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/${proyecto.proy_id}` as Route}
      className='flex flex-col items-center h-[350px] relative'
    >
      <motion.div
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
          width={900}
          height={600}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-2xl text-white font-semibold text-center px-4 tracking-wide z-20'
            >
              {proyecto.titulo}
            </motion.h3>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  )
}
