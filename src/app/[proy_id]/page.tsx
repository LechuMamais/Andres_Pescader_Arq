import { notFound } from 'next/navigation'
import { proyectos } from '../data/proyectos'
import type { Metadata } from 'next'

// Genera metadatos dinámicos (opcional pero recomendado)
export async function generateMetadata({
  params
}: {
  params: { proy_id: string }
}): Promise<Metadata> {
  const proyecto = proyectos.find((p) => p.proy_id === params.proy_id)

  return {
    title: proyecto?.titulo || 'Proyecto no encontrado',
    description: proyecto?.descripcion
  }
}

// Genera paths estáticos
export function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    proy_id: proyecto.proy_id
  }))
}

// Componente de página
export default function ProyectoPage({ params }: { params: { proy_id: string } }) {
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
        {proyecto.contenidoEspecifico && proyecto.contenidoEspecifico()}
      </article>
    </main>
  )
}
