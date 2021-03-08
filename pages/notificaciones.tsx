import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import CabeceraBrowse from "../components/utils/CabeceraBrowse";
import { SinDatos } from "../components/utils/SinDatos";
import useRuta from "../components/utils/useRuta";

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    contentWrapper: {
      margin: "0",
    },
  })
);



const Notificaciones = () => {
  const classes = useStyles({});

  useRuta({ link: "Notificaciones", ruta: "Notificaciones" });

  const onAdd =  () => {
    console.log("add")
  }

  return (
    <>
      <CabeceraBrowse
        placeHolder="Buscar notificaciones"
        prefijoFiltro="expedientes_filtros"
        onAdd={onAdd}
        onFiltro={false}
      >
        <div className={classes.contentWrapper}>
          <SinDatos titulo={"Notificaciones"} />
        </div>
      </CabeceraBrowse>
    </>
  );
};

export default Notificaciones;
