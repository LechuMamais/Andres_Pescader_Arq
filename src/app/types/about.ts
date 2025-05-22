import { PortableTextBlock } from '@portabletext/types'

export type AboutData = {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'about'
  actualLocation: string
  heading: string
  subHeading: string
  miniChamu: string
  imagen_CV: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  texto: PortableTextBlock[]
  items: PortableTextBlock[]
}
