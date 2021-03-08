import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, withStyles, WithStyles } from "@material-ui/styles";
import { AppBar, Grid, IconButton, Theme, Toolbar } from "@material-ui/core";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: "none",
      color: lightColor,
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    fondo: {
      justifyContent: "flex-end",
      flexDirection: "row",
      display: "flex",
      alignItems: "baseline",
    },
    itemsAlineados: {
      justifyContent: "flex-start",
      flexDirection: "row",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    root: {
      // padding: theme.spacing(1, 2),
    },
    test: {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void;
  visible?: boolean;
}

function HeaderMobile(props: HeaderProps) {
  const { onDrawerToggle, classes } = props;

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            <Grid item xs={1} className={classes.fondo}>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(HeaderMobile);
