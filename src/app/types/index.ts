import { PortableTextBlock } from '@portabletext/types'

export type RoutePath = '/' | '/contact'

export type Proyecto = {
  _id: string
  proy_id: string
  titulo: string
  descripcion: string
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
  contenidoEspecifico: PortableTextBlock[]
  orden?: number
  _createdAt?: string
  _updatedAt?: string
}
