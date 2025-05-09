import type { PortableTextBlock } from '@portabletext/types'

type LayoutOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type RoutePath = '/' | '/contact'

export type Contenido = {
  _key: string
  _type: 'image' | 'text' | 'video'
  asset: {
    _ref: string
    _type: string
  }
}

export type ContenidoEspecifico = {
  _key: string
  _type: string
  tipo: 'image' | 'texto' | 'video'
  contenido: Contenido[]
  layout: {
    mobile: LayoutOptions
    tablet: LayoutOptions
    desktop: LayoutOptions
  }
}

export type Proyecto = {
  _id: string
  proy_id: string
  titulo: string
  descripcion: PortableTextBlock[]
  imagen: {
    asset: {
      url: string
    }
  }
  categoria:
    | 'arquitectura'
    | 'interiores'
    | 'paisajismo'
    | 'oficinas'
    | 'vivienda'
    | 'comercio'
    | 'retail'
    | 'hospitalidad'
    | 'educación'
    | 'cultural'
    | 'hospitalario'
  hashTags?: string[]
  contenidoEspecifico: ContenidoEspecifico[]
  orden?: number
  _createdAt?: string
  _updatedAt?: string
}
