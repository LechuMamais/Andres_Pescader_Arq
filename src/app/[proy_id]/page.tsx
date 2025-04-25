import { notFound } from 'next/navigation'
import { proyectos } from '../data/proyectos'

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    proy_id: proyecto.proy_id
  }))
}

export default async function ProyectoPage({ params }: { params: { proy_id: string } }) {
  const { proy_id } = await params
  const proyecto = proyectos.find((p) => p.proy_id === proy_id)

  if (!proyecto) return notFound()

  return (
    <main>
      <article itemScope itemType="https://schema.org/CreativeWork">

        <h1 itemProp="name">{proyecto.titulo}</h1>
        <p itemProp="description">{proyecto.descripcion}</p>
        {proyecto.contenidoEspecifico && proyecto.contenidoEspecifico()}
      </article>
    </main>
  )
}
