import { PortableText } from '@portabletext/react'

const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset.url}
        alt={value.alt || 'Imagen del proyecto'}
        style={{ width: '100%', height: 'auto', margin: '2rem 0' }}
      />
    ),
    videoEmbed: ({ value }: any) => (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, margin: '2rem 0' }}>
        <iframe
          src={value.url}
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
          title='Video'
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    )
  }
}

export default function ContenidoProyecto({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
