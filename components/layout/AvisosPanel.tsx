import { Grid } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React, { useState } from "react";
import { avisosCategorias } from "./avisosCategorias";
import AvisosContentPanel from "./AvisosContentPanel";

export const AvisosPanel = () => {
  const [avisosAnchorEl, setAvisosAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleCloseAvisos = () => {
    setAvisosAnchorEl(null);
  };
  const onAvisosClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAvisosAnchorEl(event.currentTarget);
  };

  const desplegado = Boolean(avisosAnchorEl);
  const cantidadAvisosAgenda = 4 || 0;

  const avisosCategorizados = avisosCategorias.map((cat) => {
    cat.cantidad = 0;
    if (cat.nombre === 'Agenda' && cantidadAvisosAgenda > 0) {
      cat.nombre = `Agenda`;
      cat.detalle = (
        <span>{`${cantidadAvisosAgenda} agendamientos en 2 días`}</span>
      );
      cat.cantidad = cantidadAvisosAgenda;
    } else if (cat.nombre === 'Presentaciones') {
      cat.nombre = `Presentaciones`;
      cat.detalle = (
        <Grid container direction="column">
          <Grid item>{`pendientes`}</Grid>
          <Grid item>{`1 a revisión`}</Grid>
        </Grid>
      );
      cat.cantidad = 1;
    }
    return cat;
  });
  const categoriasVisibles = avisosCategorizados.filter(
    (cat) => cat.visible && cat.cantidad > 0
  );
  return (
    <div>
      <Tooltip title="Avisos">
        <IconButton color="inherit" onClick={onAvisosClick}>
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        max-width="25%"
        open={desplegado}
        anchorEl={avisosAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleCloseAvisos}
      >
        <AvisosContentPanel avisosCategorizados={categoriasVisibles} />
      </Popover>
    </div>
  );
};
