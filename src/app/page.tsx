import ProjectCard from './components/project_card'

import { client } from './sanity/client'
import { Proyecto } from './types'

const PROYECTOS_QUERY = `*[
  _type == "proyecto"
]
| order(orden asc)
{
  _id,
  proy_id,
  titulo,
  imagen {
    asset->{
      url
    }
  },
  orden
}
`

const options = { next: { revalidate: 30 } }

export default async function Home() {
  const proyectos = await client.fetch<Proyecto[]>(PROYECTOS_QUERY, {}, options)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {proyectos.map(proyecto => (
        <ProjectCard proyecto={proyecto} key={proyecto.proy_id} />
      ))}
    </div>
  )
}
