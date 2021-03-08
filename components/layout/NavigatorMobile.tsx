import {
  createStyles,
  Drawer,
  DrawerProps,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import NavigatorList from "./NavigatorList";

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: "rgba(255, 255, 255, 0.7)",
      paddingLeft: theme.spacing(3),
      textDecoration: "none",
      listStyle: "none",
      "&:hover,&:focus": {
        backgroundColor: "#404854",
      },
    },
    itemCategory: {
      boxShadow: "0 -1px 0 #404854 inset",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: "#4fc3f7",
    },
    itemPrimary: {
      fontSize: "inherit",
    },
    itemIcon: {
      minWidth: "auto",
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    // add
    vinculo: {
      color: "white",
      liststyle: "none",
      textdecoration: "none",
      display: "flex",
      alignitems: "center",
    },
    titulo: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightBold,
      textAlign: "center",
    },
  });

export interface NavigatorProps
  extends Omit<DrawerProps, "classes">,
    WithStyles<typeof styles> {}

function NavigatorMobile(props: NavigatorProps) {
  const { classes, ...other } = props;
  const router = useRouter();

  const closeSession = async () => {
    let mylink = `/SignIn`;
    await router.push({
      pathname: mylink,
    });
  };

  return (
    <Drawer variant="permanent" {...other}>
      <NavigatorList open={true} />
      <a onClick={closeSession}>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Salir
          </ListItemText>
        </ListItem>
      </a>
    </Drawer>
  );
}

export default withStyles(styles)(NavigatorMobile);
