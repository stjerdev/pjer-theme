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



const Expedientes = () => {
  const classes = useStyles({});

  useRuta({ link: "Expedientes", ruta: "Expedientes" });

  const onAdd =  () => {
    console.log("add")
  }

  return (
    <>
      <CabeceraBrowse
        placeHolder="Buscar expedientes"
        prefijoFiltro="expedientes_filtros"
        onAdd={onAdd}
        onFiltro={false}
      >
        <div className={classes.contentWrapper}>
          <SinDatos titulo={"Expedientes"} />
        </div>
      </CabeceraBrowse>
    </>
  );
};

export default Expedientes;
