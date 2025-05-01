import { client } from '@/app/sanity/client'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

import type { Metadata } from 'next'
import { ContenidoEspecifico, Proyecto } from '../types'
import { urlFor } from '../sanity/sanityImage'
import { assistant, smooch_sans } from '../fonts'

type Params = Promise<{ proy_id: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { proy_id } = await params
  const proyecto = await client.fetch<Proyecto | null>(
    `
    *[_type == "proyecto" && proy_id == $proy_id][0] {
      _id,
      proy_id,
      titulo,
      descripcion
    }
  `,
    { proy_id }
  )

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: proyecto?.descripcion || 'Descripción no disponible'
  }
}

const PROYECTO_QUERY = `
*[_type == "proyecto" && proy_id == $proy_id][0] 
`

export default async function ProyectoPage({ params }: { params: Params }) {
  const { proy_id } = await params
  const proyecto = await client.fetch<Proyecto | null>(PROYECTO_QUERY, { proy_id })

  if (!proyecto) {
    notFound()
  }

  return (
    <article itemScope itemType='https://schema.org/CreativeWork'>
      <h2
        itemProp='name'
        className={`${smooch_sans.className} text-3xl text-center py-12 tracking-wide font-[400]`}
      >
        <span className='tracking-widest'>[ </span>
        {proyecto.titulo}
        <span className='tracking-widest'> ]</span>
      </h2>

      <h3 className='text-xl text-center py-4 tracking-wider'>{proyecto.descripcion}</h3>

      <div
        className={`${assistant.className} mt-8 grid gap-4 md:gap-8 grid-cols-12 max-w-[1200px] mx-auto`}
      >
        {proyecto.contenidoEspecifico.map((seccion: ContenidoEspecifico, index: number) => {
          const spanMobile = `col-span-${seccion.layout.mobile || 12}`
          const spanTablet = `md:col-span-${seccion.layout.tablet || 12}`
          const spanDesktop = `lg:col-span-${seccion.layout.desktop || 12}`

          const gridSpanClasses = `${spanMobile} ${spanTablet} ${spanDesktop}`

          if (seccion.tipo === 'image') {
            const imagen = seccion?.contenido?.[0]
            const src = imagen?.asset ? urlFor(imagen).url() : ''

            return (
              <img
                key={seccion._key}
                src={src}
                alt={proyecto.titulo + index || 'Imagen'}
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
