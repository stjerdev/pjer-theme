import { MenuItem, Tooltip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { AvisosPanel } from "./AvisosPanel";
import { useRouter } from "next/router"

const styles = (theme: Theme) =>
  createStyles({
    fondo: {
      justifyContent: "flex-end",
      flexDirection: "row",
      display: "flex",
      marginRight: theme.spacing(1),
      alignItems: "center",
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  visible?: boolean;
}

function Header(props: HeaderProps) {
  const { classes } = props;
  const router = useRouter()

  const closeSession = async () => {
    let mylink = `/SignIn`
    await router.push({
      pathname: mylink,
    })
  };

  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid item style={{ flexGrow: 1 }}>
          Test
        </Grid>
        <Grid item md={2} className={classes.fondo}>
          <Grid item>
            <AvisosPanel />
          </Grid>

          <Grid item>
            <Tooltip title="Salir">
              <MenuItem onClick={closeSession}>
                <ExitToAppIcon />
              </MenuItem>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Header);
