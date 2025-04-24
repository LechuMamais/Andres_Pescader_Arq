import { notFound } from 'next/navigation'
import { proyectos } from '../data/proyectos'

export async function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    proy_id: proyecto.proy_id
  }))
}

export default function ProyectoPage({ params }: { params: { proy_id: string } }) {
  const proyecto = proyectos.find((p) => p.proy_id === params.proy_id)

  if (!proyecto) return notFound()

  return (
    <main>
      <h1>{proyecto.titulo}</h1>
      <p>{proyecto.descripcion}</p>
      {proyecto.contenidoEspecifico && proyecto.contenidoEspecifico()}
    </main>
  )
}
