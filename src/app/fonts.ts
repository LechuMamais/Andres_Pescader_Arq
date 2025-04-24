import { Montserrat } from "next/font/google"

export const montserrat = Montserrat({ subsets: ['latin'] })
// Tambien se le puede agregar weight, style, display, variable y otros
// De esta forma se carga la fuente en el servidor y se entrega al cliente de forma optimizada y eficiente.