import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import useRuta from "../../components/utils/useRuta";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    overflow: "hidden",
  },
}));

export default function Contributing() {
  useRuta({ link: "configuracion/Contribuir", ruta: "Config|Contribuir" });
  const classes = useStyles({});

  const link = "https://github.com/stjerdev/pjer-theme";
  return (
    <Paper className={classes.paper}>
      <a href={link} target="_blank">
        <h1>Contribuir</h1>
      </a>
      <h3>
        {" "}
        Sientase libre de abrir issues y pull requests. Siempre son bienvenias
        las ayudas de la comunidad.
      </h3>
    </Paper>
  );
}
