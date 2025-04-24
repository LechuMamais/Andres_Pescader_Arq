import Link from 'next/link'
import Image from 'next/image'
import { proyectos } from './data/proyectos'
import { Proyecto } from './types'

export default function Home() {
    return (
        < >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {proyectos.map((proyecto: Proyecto) => (
                    <Link key={proyecto.proy_id} href={`${proyecto.proy_id}`} as={`/${proyecto.proy_id}`} className='flex flex-col items-center'>
                        <Image src={proyecto.imagen} alt={proyecto.titulo} width={900} height={600} />
                        <h2>{proyecto.titulo}</h2>
                    </Link>
                ))}
            </div>
        </>
    )
}
