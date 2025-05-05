import { PortableText } from 'next-sanity'
import { assistant } from '../fonts'
import { ContenidoEspecifico, Proyecto } from '../types'
import ImageSection from './imageSection'

interface GridContentProps {
  proyecto: Proyecto
}

export function GridContent({ proyecto }: GridContentProps) {
  return (
    <div className={`${assistant.className} mt-8 grid gap-4 md:gap-8 grid-cols-12 mx-auto`}>
      {proyecto.contenidoEspecifico.map((seccion: ContenidoEspecifico, index: number) => {
        const mobileCols = seccion.layout.mobile || 12
        const tabletCols = seccion.layout.tablet || 12
        const desktopCols = seccion.layout.desktop || 12

        const spanMobile = `col-span-${mobileCols}`
        const spanTablet = `md:col-span-${tabletCols}`
        const spanDesktop = `lg:col-span-${desktopCols}`

        const gridSpanClasses = `${spanMobile} ${spanTablet} ${spanDesktop}`

        if (seccion.tipo === 'image') {
          return (
            <ImageSection
              key={seccion._key}
              _key={seccion._key}
              imagen={seccion?.contenido?.[0]}
              mobileCols={mobileCols}
              tabletCols={tabletCols}
              desktopCols={desktopCols}
              gridSpanClasses={gridSpanClasses}
              alt={`${proyecto.titulo} ${index}`}
            />
          )
        }

        if (seccion.tipo === 'texto') {
          return (
            <div key={seccion._key} className={`my-4 ${gridSpanClasses}`}>
              <PortableText value={seccion.contenido} />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
