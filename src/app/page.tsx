import Link from 'next/link'
import Image from 'next/image'
import { proyectos } from './data/proyectos'
import { Proyecto } from './types'

export default function Home() {
    return (
        <main >
            <h1 className='text-center py-12 text-2xl font-semibold tracking-wider'>ANDRES PESCADER ARQUITECTO</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {proyectos.map((proyecto: Proyecto) => (
                    <Link key={proyecto.proy_id} href={`${proyecto.proy_id}`} as={`/${proyecto.proy_id}`} className='flex flex-col items-center'>
                        <Image src={proyecto.imagen} alt={proyecto.titulo} width={600} height={400} />
                        <h2>{proyecto.titulo}</h2>
                    </Link>
                ))}
            </div>
        </main>
    )
}
