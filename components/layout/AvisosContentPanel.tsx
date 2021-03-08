import blue from "@material-ui/core/colors/blue"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Link from "next/link"
import React from "react"
import { ICategoriaAviso } from "./avisosCategorias"

interface IProps {
  avisosCategorizados?: ICategoriaAviso[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    divisor: {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
    colorIcono: {
      minWidth: 30,
      color: blue[500],
    },
    itemTexto: {
      padding: "0px",
      margin: "0px",
    },
  }),
)

export default function AvisosContentPanel(props: IProps) {
  const { avisosCategorizados } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {avisosCategorizados &&
        avisosCategorizados.map((cat, index) => (
          <>
            <List>
              <Link key={index} href={cat.enlace}>
                <ListItem key={index} button>
                  <ListItemIcon className={classes.colorIcono}>
                    {cat.icono}
                  </ListItemIcon>
                  <ListItemText
                    className={classes.itemTexto}
                    secondary={cat.detalle}
                  >
                    {cat.nombre}
                  </ListItemText>
                </ListItem>
              </Link>
            </List>
            <Divider className={classes.divisor} variant="fullWidth" />
          </>
        ))}
    </div>
  )
}
