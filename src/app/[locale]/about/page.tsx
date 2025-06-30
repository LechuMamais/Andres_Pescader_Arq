import { client } from '../../sanity/client'
import { ABOUT_QUERY } from '../../sanity/apiGroks'
import AboutClient from './AboutClient'

export default async function About() {
  const about = await client.fetch(ABOUT_QUERY)

  return <AboutClient about={about} />
}
