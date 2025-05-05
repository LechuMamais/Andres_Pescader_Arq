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

export const PROYECTO_QUERY = `*[_type == "proyecto" && proy_id == $proy_id][0]`

export const PROYECTO_QUERY_Metadata = `
    *[_type == "proyecto" && proy_id == $proy_id][0] {
      _id,
      proy_id,
      titulo,
      descripcion
    }
  `
