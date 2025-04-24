import { ReactElement } from 'react'

export type Proyecto = {
    proy_id: string
    titulo: string
    descripcion: string
    imagen: string
    contenidoEspecifico: () => ReactElement
}
