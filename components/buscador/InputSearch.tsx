import { Button, Tooltip } from "@material-ui/core"
import InputBase from "@material-ui/core/InputBase"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AddBoxIcon from "@material-ui/icons/AddBox"
import RefreshIcon from "@material-ui/icons/Refresh"
import SearchIcon from "@material-ui/icons/Search"
import React, { useState } from "react"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 2px",
      display: "flex",
      alignItems: "center",
      width: "auto",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    block: {
      display: "block",
      color: "black",
    },
    paper: {
      // padding: "2px 2px",
      display: "flex",
      alignItems: "center",
      width: 300,
      // top: "138px !important;",
    },
  }),
)

export type TFiltroAvanzadoForm = {
  schema: any
  uiSchema: any
}

type TInputSearch = {
  onChange?: (item) => void
  onDelete?: (item) => void
  onAdd?: () => void
  onRefresh?: () => void
  onFiltro?: boolean
}
function InputSearch(props: TInputSearch) {
  const { onChange, onAdd, onRefresh, onFiltro } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [busquedaValue, setBusquedaValue] = useState("")

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (event: any) => {
    setBusquedaValue(event.target.value)
    onChange(event)
  }

  const open = Boolean(anchorEl)
  return (
    <>
      <div className={classes.root} id="div-buscar">
        <SearchIcon className={classes.block} color="inherit" />
        <InputBase
          className={classes.input}
          placeholder="Buscar"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleChange}
          value={busquedaValue}
        />
        <Tooltip title="Agregar">
          <span>
            <Button
              color="primary"
              component="span"
              onClick={onAdd}
              disabled={!onAdd}
            >
              <AddBoxIcon />
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="Refrescar">
          <span>
            <Button
              color="primary"
              className={classes.iconButton}
              onClick={onRefresh}
              disabled={!onRefresh}
              aria-label="directions"
            >
              <RefreshIcon />
            </Button>
          </span>
        </Tooltip>
      
      </div>
    </>
  )
}

export default InputSearch
