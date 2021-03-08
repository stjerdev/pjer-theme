import { AppBar } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import React from "react"
import InputSearch from "../buscador/InputSearch"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(2),
      overflow: "hidden",
      flexGrow: 1,
    },
    secondaryBar: {
      zIndex: 0,
    },
    searchBar: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: "block",
    },
    nuevoExpediente: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: "0",
    },
  }),
)

type TCabeceraBrowse = {
  placeHolder: string
  children: React.ReactNode
  rutaNuevo?: string
  onFiltro?: boolean
  prefijoFiltro?: string
  filter?: { [key: string]: any }
  onSearchChange?: (buscar: string) => void
  onRefresh?: () => void
  onAdd?: () => void

}
const CabeceraBrowse = (props: TCabeceraBrowse) => {
  const {
    children,
    onRefresh,
    onSearchChange,
    onAdd,
    onFiltro,
  } = props
  const classes = useStyles({})
  const handleBuscarTextOnChange = (event) => {
    onSearchChange && onSearchChange(event.target.value)
  }
  return (
    <>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      ></AppBar>

      <Paper className={classes.paper}>
     
          <AppBar
            className={classes.searchBar}
            position="static"
            color="default"
            elevation={0}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <InputSearch
                    onChange={handleBuscarTextOnChange}
                    onAdd={onAdd}
                    onRefresh={onRefresh}
                    onFiltro={onFiltro}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <>{children}</>
      </Paper>
    </>
  )
}

export default CabeceraBrowse
