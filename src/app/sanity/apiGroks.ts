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

export const PROYECTO_QUERY_WITH_NAV = `
  // Obtenemos el proyecto actual
  {
    "actual": *[_type == "proyecto" && proy_id == $proy_id][0],
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
