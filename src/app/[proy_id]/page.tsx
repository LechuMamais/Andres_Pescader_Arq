import { notFound } from 'next/navigation'
import { proyectos } from '../data/proyectos'

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    proy_id: proyecto.proy_id // Cambié proyecto.proy_id por proyecto.id
  }))
}

interface PageProps {
  params: {
    proy_id: string
  }
}

export default function ProyectoPage({ params }: PageProps) {
  const { proy_id } = params

  const proyecto = proyectos.find((p) => p.proy_id === proy_id)

  if (!proyecto) {
    notFound()
  }

  return (
    <main>
      <article itemScope itemType="https://schema.org/CreativeWork">
        <h2 itemProp="name" className="text-2xl text-center py-12 tracking-wider font-semibold">
          {proyecto.titulo}
        </h2>
        {/*<p itemProp="description">{proyecto.descripcion}</p>*/}
        {proyecto.contenidoEspecifico && proyecto.contenidoEspecifico()}
      </article>
    </main>
  )
}
