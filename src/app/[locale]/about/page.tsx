import { client } from '../../sanity/client'
import { getAboutQuery } from '../../sanity/apiGroks'
import AboutClient from './AboutClient'

type Props = {
  params: {
    locale: 'es' | 'en'
  }
}

export default async function About({ params: { locale } }: Props) {
  const about = await client.fetch(getAboutQuery(locale))

  const normalizedAbout = {
    ...about,
    heading: about[`heading${locale === 'en' ? '_en' : ''}`],
    subHeading: about[`subHeading${locale === 'en' ? '_en' : ''}`],
    miniChamu: about[`miniChamu${locale === 'en' ? '_en' : ''}`],
    texto: about[`texto${locale === 'en' ? '_en' : ''}`],
    items: about[`items${locale === 'en' ? '_en' : ''}`]
  }

  return <AboutClient about={normalizedAbout} />
}
