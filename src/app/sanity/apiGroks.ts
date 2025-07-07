export const PROYECTOS_QUERY = `*[_type == "proyecto"] | order(orden asc)
{
  _id,
  proy_id,
  titulo,
  imagen {
    asset->{
      url
    }
  },
  orden
}
`

export const PROYECTO_QUERY_BASE = `*[_type == "proyecto" && proy_id == $proy_id][0]{ orden, titulo, proy_id, descripcion, ... }`

export const PROYECTO_QUERY = `*[_type == "proyecto" && proy_id == $proy_id][0]`

export const getProyectoQueryBase = (locale: 'es' | 'en') => {
  const suffix = locale === 'en' ? '_en' : ''
  return `*[_type == "proyecto" && proy_id == $proy_id][0]{
    _id,
    orden,
    proy_id,
    categoria,
    hashTags,
    imagen,
    "titulo": titulo${suffix},
    "descripcion": descripcion${suffix},
    contenidoEspecifico
  }`
}

export const PROYECTO_QUERY_WITH_NAV = `
  {
    "anterior": *[_type == "proyecto" && orden < $orden] | order(orden desc)[0]{
      proy_id,
      titulo
    },
    "siguiente": *[_type == "proyecto" && orden > $orden] | order(orden asc)[0]{
      proy_id,
      titulo
    }
  }
`

export const PROYECTO_QUERY_Metadata = `
    *[_type == "proyecto" && proy_id == $proy_id][0] {
      _id,
      proy_id,
      titulo,
      descripcion
    }
  `

export const ABOUT_QUERY = `*[_type == "about"][0]`

export const getAboutQuery = (locale: 'es' | 'en') => {
  const suffix = locale === 'en' ? '_en' : ''

  return `
    *[_type == "about"][0] {
      _id,
      _updatedAt,
      actualLocation,
      heading${suffix},
      subHeading${suffix},
      miniChamu${suffix},
      texto${suffix},
      items${suffix},
      imagen_CV
    }
  `
}
