import ProjectCard from './components/projectCard'
import { PROYECTOS_QUERY } from './sanity/apiGroks'
import { client } from './sanity/client'
import { Proyecto } from './types'

const options = { next: { revalidate: 30 } }

export default async function Home() {
  const proyectos = await client.fetch<Proyecto[]>(PROYECTOS_QUERY, {}, options)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
      {proyectos.map((proyecto, index) => (
        <ProjectCard proyecto={proyecto} key={proyecto.proy_id} index={index} />
      ))}
    </div>
  )
}
