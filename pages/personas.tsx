import React from "react"
import { SinDatos } from "../components/utils/SinDatos"
import useRuta from "../components/utils/useRuta"


const personas = () => {

  useRuta({ link: "personas", ruta: "Personas" })



 
  return (
  
        <SinDatos titulo={"En listado personas"} />
  

  )
}

export default personas
