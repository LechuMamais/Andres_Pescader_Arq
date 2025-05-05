import Image from 'next/image'
import { urlFor } from '../sanity/sanityImage'
import { Contenido } from '../types'

interface ImageSectionProps {
  _key: string
  imagen: Contenido
  mobileCols: number
  tabletCols: number
  desktopCols: number
  gridSpanClasses: string
  alt: string
}

export default function ImageSection({
  _key,
  imagen,
  mobileCols,
  tabletCols,
  desktopCols,
  gridSpanClasses,
  alt
}: ImageSectionProps) {
  const src = imagen?.asset ? urlFor(imagen).url() : ''

  const match = imagen?.asset?._ref?.match(/-(\d+)x(\d+)-/)
  const width = match ? parseInt(match[1]) : 800
  const height = match ? parseInt(match[2]) : 600

  const mobileSize = `${(mobileCols / 12) * 100}vw`
  const tabletSize = `${(tabletCols / 12) * 100}vw`
  const desktopSize = `${(desktopCols / 12) * 100}vw`

  return (
    <Image
      key={_key}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`(max-width: 768px) ${mobileSize}, (max-width: 1024px) ${tabletSize}, ${desktopSize}`}
      className={`w-full h-auto ${gridSpanClasses}`}
    />
  )
}
