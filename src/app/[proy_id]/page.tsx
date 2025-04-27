import { notFound } from 'next/navigation'
import { proyectos } from '../data/proyectos'
import type { Metadata } from 'next'

// Tipo actualizado: params es una Promise
type Params = Promise<{ proy_id: string }>

// --- generateMetadata ---
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { proy_id } = await params // ahora hacemos await
  const proyecto = proyectos.find((p) => p.proy_id === proy_id)

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: proyecto?.descripcion
  }
}

// --- generateStaticParams ---
export function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    proy_id: proyecto.proy_id
  }))
}

// --- Página ---
export default async function ProyectoPage({ params }: { params: Params }) {
  const { proy_id } = await params // ahora hacemos await
  const proyecto = proyectos.find((p) => p.proy_id === proy_id)

  if (!proyecto) {
    notFound()
  }

  return (
    <main>
      <article itemScope itemType="https://schema.org/CreativeWork">
        <h2
          itemProp="name"
          className="text-2xl text-center py-12 tracking-wider font-semibold"
        >
          {proyecto.titulo}
        </h2>
        {proyecto.contenidoEspecifico && proyecto.contenidoEspecifico()}
      </article>
    </main>
  )
}
