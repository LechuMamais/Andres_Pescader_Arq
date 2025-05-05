import { client } from '@/app/sanity/client'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

import type { Metadata } from 'next'
import { ContenidoEspecifico, Proyecto } from '../types'
import { urlFor } from '../sanity/sanityImage'
import { assistant, smooch_sans } from '../fonts'
import Image from 'next/image'
import { PROYECTO_QUERY, PROYECTO_QUERY_Metadata } from '../sanity/apiGroks'

type Params = Promise<{ proy_id: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { proy_id } = await params
  const proyecto = await client.fetch<Proyecto | null>(PROYECTO_QUERY_Metadata, { proy_id })

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: proyecto?.descripcion || 'Descripción no disponible'
  }
}

export default async function ProyectoPage({ params }: { params: Params }) {
  const { proy_id } = await params
  const proyecto = await client.fetch<Proyecto | null>(PROYECTO_QUERY, { proy_id })

  if (!proyecto) {
    notFound()
  }

  return (
    <article itemScope itemType='https://schema.org/CreativeWork' className=' max-w-[1600px]'>
      <h2
        itemProp='name'
        className={`${smooch_sans.className} text-3xl text-center py-12 tracking-wide font-[400]`}
      >
        <span className='tracking-widest'>[ </span>
        {proyecto.titulo}
        <span className='tracking-widest'> ]</span>
      </h2>

      <h3 className='text-xl text-center py-4 tracking-wider max-w-[1080px] mx-auto px-8 lg:px-4'>
        {proyecto.descripcion}
      </h3>

      <div className={`${assistant.className} mt-8 grid gap-4 md:gap-8 grid-cols-12 mx-auto`}>
        {proyecto.contenidoEspecifico.map((seccion: ContenidoEspecifico, index: number) => {
          const mobileCols = seccion.layout.mobile || 12
          const tabletCols = seccion.layout.tablet || 12
          const desktopCols = seccion.layout.desktop || 12

          const spanMobile = `col-span-${mobileCols}`
          const spanTablet = `md:col-span-${tabletCols}`
          const spanDesktop = `lg:col-span-${desktopCols}`

          const gridSpanClasses = `${spanMobile} ${spanTablet} ${spanDesktop}`

          if (seccion.tipo === 'image') {
            const imagen = seccion?.contenido?.[0]
            const src = imagen?.asset ? urlFor(imagen).url() : ''

            const match = imagen?.asset?._ref?.match(/-(\d+)x(\d+)-/)
            const width = match ? parseInt(match[1]) : 800
            const height = match ? parseInt(match[2]) : 600

            const mobileSize = `${(mobileCols / 12) * 100}vw`
            const tabletSize = `${(tabletCols / 12) * 100}vw`
            const desktopSize = `${(desktopCols / 12) * 100}vw`

            return (
              <Image
                key={seccion._key}
                src={src}
                alt={proyecto.titulo + index || 'Imagen'}
                width={width}
                height={height}
                sizes={`(max-width: 768px) ${mobileSize}, (max-width: 1024px) ${tabletSize}, ${desktopSize}`}
                className={`w-full h-auto ${gridSpanClasses}`}
              />
            )
          }

          if (seccion.tipo === 'texto') {
            return (
              <div key={seccion._key} className={`my-4 ${gridSpanClasses}`}>
                <PortableText value={seccion.contenido} />
              </div>
            )
          }

          return null
        })}
      </div>
    </article>
  )
}
