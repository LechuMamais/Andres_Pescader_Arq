import { client } from '../../sanity/client'
import { getAboutQuery } from '../../sanity/apiGroks'
import AboutClient from './AboutClient'
import { PageProps } from '../../../../.next/types/app/layout'

export default async function Page({ params }: PageProps) {
  const { locale } = await params
  const lang = locale === 'en' ? 'en' : 'es'

  const about = await client.fetch(getAboutQuery(lang))

  const normalizedAbout = {
    ...about,
    heading: about[`heading${lang === 'en' ? '_en' : ''}`],
    subHeading: about[`subHeading${lang === 'en' ? '_en' : ''}`],
    miniChamu: about[`miniChamu${lang === 'en' ? '_en' : ''}`],
    texto: about[`texto${lang === 'en' ? '_en' : ''}`],
    items: about[`items${lang === 'en' ? '_en' : ''}`]
  }

  return <AboutClient about={normalizedAbout} />
}
