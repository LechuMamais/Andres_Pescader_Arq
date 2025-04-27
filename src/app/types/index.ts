import { ReactElement } from 'react'

export type RoutePath = '/' | '/contact'

export type Proyecto = {
  proy_id: string
  titulo: string
  descripcion: string
  imagen: string
  categoria: string
  hashTags?: string[]
  contenidoEspecifico: () => ReactElement
}
