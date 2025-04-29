import { Smooch_Sans, Assistant } from 'next/font/google'

export const smooch_sans = Smooch_Sans({ subsets: ['latin'] })
// Tambien se le puede agregar weight, style, display, variable y otros
// De esta forma se carga la fuente en el servidor y se entrega al cliente de forma optimizada y eficiente.

export const assistant = Assistant({ subsets: ['latin'] })
