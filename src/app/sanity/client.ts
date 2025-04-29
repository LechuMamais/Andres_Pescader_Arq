import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '3t9g3iys',
  dataset: 'andres_pescader_arq_01',
  apiVersion: '2024-01-01',
  useCdn: false
})
