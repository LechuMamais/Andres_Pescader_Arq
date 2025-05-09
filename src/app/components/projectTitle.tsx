import { PortableText, PortableTextBlock } from 'next-sanity'

interface ProjectTitleProps {
  titulo: string
  descripcion: PortableTextBlock[]
}

export default function ProjectTitle({ titulo, descripcion }: ProjectTitleProps) {
  console.log(descripcion)
  return (
    <>
      <h2
        itemProp='name'
        className='text-3xl text-center py-12 tracking-wide font-[400] smooch-sans'
      >
        <span className='tracking-widest'>[ </span>
        {titulo}
        <span className='tracking-widest'> ]</span>
      </h2>
      <h3 className='text-xl text-center py-4 tracking-wider max-w-[1080px] mx-auto px-8 lg:px-4'>
        <PortableText value={descripcion} />
      </h3>
    </>
  )
}
