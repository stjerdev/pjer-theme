import * as React from "react"

type TSinDatos = {
  titulo: string
}

export const SinDatos = (props: TSinDatos) => {
  const { titulo } = props

  return (
    <div> 
      <h3>Sin datos: {titulo}</h3>
    </div>
  )
}
