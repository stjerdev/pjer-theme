import { Avatar, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import useLocalStorage from "../utils/useLocalStorage";
import menuCategorias from "./menuCategorias";
import MenuItem from "./MenuItem";

const useStyles = makeStyles((theme) => ({
  user: {
    paddingTop: theme.spacing(1),
    paddingBottom: 1,
    color: "#ffffff",
    textDecoration: "none",
    flexDirection: "column",
    listStyle: "none",
    boxShadow: "0 -1px 0 #404854 inset",
    "&:hover,&:focus": {
      backgroundColor: "#404854",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  organismo: {
    whiteSpace: "pre-wrap",
    textAlign: "center",
  },
}));

type TProp = {
  open: boolean;
};

const NavigatorList = function (props: TProp) {
  const { open } = props;
  const classes = useStyles();
  const [itemSeleccionado, setItemSeleccionado] = useLocalStorage<{
    categoria: string;
  }>("navigator_selected", { categoria: "Inicio" });

  return (
    <List disablePadding>
      <Link key="perfil" href="/SignIn">
        <ListItem
          key="perfil"
          className={classes.user}
          button
        >
          <Avatar
            src={"/static/images/avatar/avatar1.png"}
            alt="Luke Skywalker"
            className={classes.large}
          />
          <ListItemText>
            <Grid container alignItems="center" direction="column">
              <Grid item>{open && <span>Luke Skywalker</span>}</Grid>
            </Grid>
          </ListItemText>
        </ListItem>
      </Link>

      {menuCategorias.map((item, index) => (
        <MenuItem
          {...item}
          key={index}
          colapsado={!open}
          itemSeleccionado={itemSeleccionado}
          setItemSeleccionado={setItemSeleccionado}
        />
      ))}
    </List>
  );
};

export default NavigatorList;
