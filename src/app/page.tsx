import Link from 'next/link'
import Image from 'next/image'
import { proyectos } from './data/proyectos'
import { Proyecto } from './types'
import ProjectCard from './components/project_card'

export default function Home() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {proyectos.map((proyecto: Proyecto) => (
                <ProjectCard proyecto={proyecto} key={proyecto.proy_id} />
            ))}
        </div>
    )
}
