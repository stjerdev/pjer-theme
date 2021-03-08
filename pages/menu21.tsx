import Paper from "@material-ui/core/Paper";
import React from "react";
import useRuta from "../components/utils/useRuta";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    overflow: "hidden",
    background: "green"
  },
}));

const Menu21 = () => {
  useRuta({ link: "menu21", ruta: "Menu 2 - 1" });
  const classes = useStyles({});

  return (
    <Paper className={classes.paper}>
      <h3> Menu 2 - 1</h3>
    </Paper>
  );
};

export default Menu21;
