'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { AboutData } from '../types/about'
import { urlFor } from '../sanity/sanityImage'

export default function AboutClient({ about }: { about: AboutData }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className='mx-auto px-6 py-16 space-y-24'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='text-center'
      >
        <h2 className='text-4xl lg:text-5xl font-bold mb-4 tracking-tight'>{about.heading}</h2>
        <p className='text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>
          {about.subHeading}
        </p>
      </motion.div>

      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={imageLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='relative h-[400px] w-full'
        >
          <div className='absolute top-0 left-0 w-2/3 h-full'>
            <Image
              src={urlFor(about.imagen_CV).url()}
              alt='Estudio'
              className='object-cover rounded-2xl shadow-xl'
              fill
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>
          <div className='absolute bottom-0 right-0 w-2/3 h-2/3 border-4 border-black dark:border-white translate-x-6 translate-y-6 rounded-2xl z-[-1]' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={imageLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='prose dark:prose-invert max-w-none'
        >
          <div className='prose dark:prose-invert max-w-none'>
            <PortableText value={about.items} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='text-center'
      >
        <p className='text-xl italic max-w-2xl mx-auto text-gray-600 dark:text-gray-400'>
          {about.miniChamu}
        </p>
      </motion.div>
    </section>
  )
}
