import Image from 'next/image'
import { Proyecto } from '../types'

export const proyectos: Proyecto[] = [
    {
        proy_id: 'proyecto-casa-lago',
        titulo: 'Casa en el Lago',
        descripcion: 'Una vivienda moderna frente al lago.',
        imagen: '/images/proy_01/gonzalez-jacobson-aarquitectura-villas_57.jpg',
        contenidoEspecifico: () => (
            <>
                <p>La casa fue diseñada para integrarse con el paisaje natural.</p>
                < Image
                    src="/images/proy_01/gonzalez-jacobson-aarquitectura-villas_57.jpg"
                    alt="Detalle casa lago"
                    width={800}
                    height={600}
                />
            </>
        )
    },
    {
        proy_id: 'proyecto-cabaña-bosque',
        titulo: 'Cabaña en el Bosque',
        descripcion: 'Refugio cálido y minimalista en medio del bosque.',
        imagen: '/images/proy_02/decoracion-locales-comerciales-madrid.jpg',
        contenidoEspecifico: () => (
            <>
                <p>Esta cabaña está hecha completamente en madera nativa.</p>
                < Image
                    src="/images/proy_02/decoracion-locales-comerciales-madrid.jpg"
                    alt="Interior cabaña"
                    width={800}
                    height={600}
                />
            </>
        )
    }
]
