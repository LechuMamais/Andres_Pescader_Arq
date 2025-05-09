import { client } from '@/app/sanity/client'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PROYECTO_QUERY, PROYECTO_QUERY_Metadata } from '../sanity/apiGroks'
import ProjectTitle from '../components/projectTitle'
import { GridContent } from '../components/gridContent'
import { Proyecto } from '../types'
import { portableTextToPlainText } from '../sanity/portableTextToPlainText'

type Params = Promise<{ proy_id: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { proy_id } = await params
  const proyecto = await client.fetch<Proyecto | null>(PROYECTO_QUERY_Metadata, { proy_id })

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: portableTextToPlainText(proyecto?.descripcion) || 'Descripción del proyecto'
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
      <ProjectTitle titulo={proyecto.titulo} descripcion={proyecto.descripcion} />

      <GridContent proyecto={proyecto} />
    </article>
  )
}
