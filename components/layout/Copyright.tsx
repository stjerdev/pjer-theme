import { Typography } from "@material-ui/core"
import React from "react"

let TITULO_APP = `${process.env.NEXT_PUBLIC_TITULO_APP}`

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Dev "}
      {TITULO_APP} {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Copyright
