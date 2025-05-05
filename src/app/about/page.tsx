'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className='max-w-6xl mx-auto px-6 py-16 space-y-24'>
      {/* Sección principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h2 className='text-4xl lg:text-5xl font-bold mb-4 tracking-tight'>Behind the Vision</h2>
        <p className='text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>
          Cada línea dibujada es una historia. Soy Andres Pescader, arquitecto apasionado por
          fusionar diseño contemporáneo con identidad local. En cada proyecto busco equilibrio,
          emoción y funcionalidad.
        </p>
      </motion.div>

      {/* Layout 2 columnas */}
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        {/* Imagen y estilo collage */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative h-[400px] w-full'
        >
          <div className='absolute top-0 left-0 w-2/3 h-full'>
            <Image
              src='/images/about.jpg'
              alt='Estudio'
              className='object-cover rounded-2xl shadow-xl'
              fill
            />
          </div>
          <div className='absolute bottom-0 right-0 w-2/3 h-2/3 border-4 border-black dark:border-white translate-x-6 translate-y-6 rounded-2xl z-[-1]' />
        </motion.div>

        {/* Texto y proceso creativo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className='text-2xl font-semibold mb-4'>Mi proceso creativo</h3>
          <ul className='space-y-4 text-gray-700 dark:text-gray-300'>
            <li>
              <span className='font-semibold'>1. Investigación:</span> Comprendo el entorno, la
              historia del lugar y los objetivos del cliente.
            </li>
            <li>
              <span className='font-semibold'>2. Conceptualización:</span> Desarrollo ideas visuales
              inspiradas en emociones, formas y texturas.
            </li>
            <li>
              <span className='font-semibold'>3. Materialización:</span> Llevo el diseño a lo
              concreto, cuidando cada detalle constructivo y espacial.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Cierre inspirador */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <p className='text-xl italic max-w-2xl mx-auto text-gray-600 dark:text-gray-400'>
          “Creo espacios que no solo se habitan, sino que se sienten, se respiran y se recuerdan.”
        </p>
      </motion.div>
    </section>
  )
}
