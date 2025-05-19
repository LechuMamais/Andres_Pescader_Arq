import { client } from '@/app/sanity/client'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PROYECTO_QUERY_Metadata, PROYECTO_QUERY_WITH_NAV } from '../sanity/apiGroks'
import ProjectTitle from '../components/projectTitle'
import { GridContent } from '../components/gridContent'
import { Proyecto } from '../types'
import { portableTextToPlainText } from '../sanity/portableTextToPlainText'
import Link from 'next/link'

type Params = Promise<{ proy_id: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { proy_id } = await params
  const data = await client.fetch(PROYECTO_QUERY_Metadata, { proy_id })
  const proyecto = data?.actual as Proyecto | null

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: portableTextToPlainText(proyecto?.descripcion) || 'Descripción del proyecto'
  }
}

export default async function ProyectoPage({ params }: { params: Params }) {
  const { proy_id } = await params

  // Primero buscamos el proyecto actual para obtener su `orden`
  const actualProyecto = await client.fetch(
    `*[_type == "proyecto" && proy_id == $proy_id][0]{ orden, titulo, proy_id, descripcion, ... }`,
    { proy_id }
  )

  if (!actualProyecto) {
    notFound()
  }

  // Luego usamos ese orden en la consulta extendida
  const data = await client.fetch(PROYECTO_QUERY_WITH_NAV, {
    proy_id,
    orden: actualProyecto.orden
  })

  const proyecto = actualProyecto
  const anterior = data?.anterior
  const siguiente = data?.siguiente

  console.log('Anterior:', anterior)
  console.log('Siguiente:', siguiente)

  return (
    <article itemScope itemType='https://schema.org/CreativeWork' className='max-w-[1600px]'>
      <ProjectTitle titulo={proyecto.titulo} descripcion={proyecto.descripcion} />
      <GridContent proyecto={proyecto} />

      <nav className='flex justify-between items-center mt-32 px-8 sm:px-4'>
        {anterior ? (
          <Link href={`/${anterior.proy_id}`} className='flex items-center gap-2 group'>
            <img
              src='/trending_flat_48.svg'
              alt='Flecha izquierda'
              className='w-10 sm:w-8 transform rotate-180 transition-transform duration-300 group-hover:-translate-x-2'
            />
            <span className='text-lg tracking-wide sr-only sm:not-sr-only'>{anterior.titulo}</span>
          </Link>
        ) : (
          <div />
        )}

        {siguiente ? (
          <Link href={`/${siguiente.proy_id}`} className='flex items-center gap-2 group py-2'>
            <span className='text-lg tracking-wide sr-only sm:not-sr-only'>{siguiente.titulo}</span>
            <img
              src='/trending_flat_48.svg'
              alt='Flecha derecha'
              className='w-10 sm:w-8 transition-transform duration-300 group-hover:translate-x-2'
            />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  )
}
