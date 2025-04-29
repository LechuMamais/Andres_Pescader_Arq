import Image from 'next/image'
import Link from 'next/link'
import { Route } from 'next'
import { Proyecto } from '../types'

interface Props {
  proyecto: Proyecto
}

export default function ProjectCard({ proyecto }: Props) {
  return (
    <Link href={`/${proyecto.proy_id}` as Route} className='flex flex-col items-center h-[350px]'>
      <Image
        className='h-full object-cover'
        src={proyecto.imagen?.asset?.url || '/placeholder.jpg'}
        alt={proyecto.titulo}
        width={900}
        height={600}
      />
    </Link>
  )
}
