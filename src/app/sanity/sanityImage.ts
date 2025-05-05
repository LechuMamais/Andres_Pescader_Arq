import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/app/sanity/client'
import { Contenido } from '../types'

const builder = imageUrlBuilder(client)

export function urlFor(source: Contenido) {
  return builder.image(source)
}
