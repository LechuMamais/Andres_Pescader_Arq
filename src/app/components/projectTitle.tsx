'use client'

import { motion } from 'framer-motion'
import { PortableText, PortableTextBlock } from 'next-sanity'
import { useEffect, useState } from 'react'

interface ProjectTitleProps {
  titulo: string
  descripcion: PortableTextBlock[]
}

export default function ProjectTitle({ titulo, descripcion }: ProjectTitleProps) {
  const [minHeight, setMinHeight] = useState('100vh')

  useEffect(() => {
    function updateHeight() {
      const headerHeight = window.innerWidth >= 768 ? 192 : 128
      setMinHeight(`calc(100vh - ${headerHeight}px)`)
    }

    updateHeight() // Ejecutar en el montaje

    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <section
      className='flex flex-col justify-around items-center px-4 min-h-[calc(100vh - 8rem)] md:min-h-[calc(100vh - 12rem)]'
      style={{ minHeight }}
    >
      <motion.h2
        itemProp='name'
        className='text-3xl text-center py-4 tracking-wide font-[400] smooch-sans'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className='tracking-widest'>[ </span>
        {titulo}
        <span className='tracking-widest'> ]</span>
      </motion.h2>

      <motion.h3
        className='text-xl text-center py-4 pb-24 tracking-wider max-w-[1080px] mx-auto px-8 lg:px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <PortableText value={descripcion} />
      </motion.h3>
    </section>
  )
}
