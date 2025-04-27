import Image from 'next/image'
import { Proyecto } from '../types'

export const proyectos: Proyecto[] = [
  {
    proy_id: '1',
    titulo: 'GRUPO MCI',
    descripcion: 'GRUPO MCI',
    imagen: '/images/proy_01/01.png',
    categoria: 'oficinas',
    hashTags: ['#oficinas', '#diseño', '#interiorismo'],
    contenidoEspecifico: () => (
      <>
        <Image src='/images/proy_01/01.png' alt='GRUPO MCI_01' width={1200} height={600} />
      </>
    )
  },
  {
    proy_id: '2',
    titulo: 'Cabaña en el Bosque',
    descripcion: 'Refugio cálido y minimalista en medio del bosque.',
    imagen: '/images/proy_02/decoracion-locales-comerciales-madrid.jpg',
    categoria: 'vivienda',
    hashTags: ['#vivienda', '#diseño', '#interiorismo'],
    contenidoEspecifico: () => (
      <>
        <Image
          src='/images/proy_02/decoracion-locales-comerciales-madrid.jpg'
          alt='Interior cabaña'
          width={800}
          height={600}
        />
      </>
    )
  }
]
