import { client } from '@/app/sanity/client'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getProyectoQueryBase,
  PROYECTO_QUERY_Metadata,
  PROYECTO_QUERY_WITH_NAV
} from '../../sanity/apiGroks'
import ProjectTitle from '../../components/projectTitle'
import { GridContent } from '../../components/gridContent'
import { Proyecto } from '../../types'
import { portableTextToPlainText } from '../../sanity/portableTextToPlainText'
import ProjectsNavigationArrows from '../../components/projectsNavigationArrows'

type Params = Promise<{ proy_id: string; locale: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { proy_id } = await params
  const data = await client.fetch(PROYECTO_QUERY_Metadata, { proy_id })
  const proyecto = data as Proyecto | null

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: portableTextToPlainText(proyecto?.descripcion) || 'Descripción del proyecto'
  }
}

export default async function ProyectoPage({ params }: { params: Params }) {
  const { proy_id, locale } = await params
  const lang = locale === 'en' ? 'en' : 'es' // Default to Spanish if locale is not recognized

  // Primero buscamos el proyecto actual para obtener su `orden`, luego lo usamos para buscar el anterior y siguiente
  const proyecto = await client.fetch(getProyectoQueryBase(lang), { proy_id })

  if (!proyecto) {
    notFound()
  }

  const data = await client.fetch(PROYECTO_QUERY_WITH_NAV, {
    proy_id,
    orden: proyecto.orden
  })

  const anterior = data?.anterior
  const siguiente = data?.siguiente

  return (
    <article itemScope itemType='https://schema.org/CreativeWork' className='max-w-[1600px]'>
      <ProjectTitle titulo={proyecto.titulo} descripcion={proyecto.descripcion} />
      <GridContent proyecto={proyecto} />
      <ProjectsNavigationArrows anterior={anterior} siguiente={siguiente} />
    </article>
  )
}
