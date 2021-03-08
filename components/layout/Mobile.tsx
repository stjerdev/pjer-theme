import {
  createMuiTheme,
  createStyles,
  CssBaseline,
  Hidden,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IRuta } from "../../store/reducers/rutasReducer";
import BreadCrumb from "./BreadCrumb";
import Copyright from "./Copyright";
import HeaderMobile from "./HeaderMobile";
import NavigatorMobile from "./NavigatorMobile";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c",
        backgroundImage: "url(/static/nav.png)",
      },
    },
    MuiButton: {
      root: {
        minWidth: "30px",
      },
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "0.3rem",
        },
        "*::-webkit-scrollbar-track": {
          background: "#fff",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#009be5",
          borderRadius: "4px",
          "&:active": {
            background: "#f50057",
          },
          "&:hover": {
            background: "#f50057",
          },
        },
      },
    },
  },
};

const drawerWidth = 200;

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minHeight: "100vh",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    main: {
      flex: 1,
      background: "#eaeff1",
      display: "flex",
      flexDirection: "column",
    },
    footer: {
      padding: theme.spacing(2),
      background: "#eaeff1",
    },
    "pdfobject-container": {
      height: "100%",
    },
  })
);

type Props = {
  children: React.ReactNode;
  className?: string;
  showHeader: boolean;
};

export const Mobile = function (props: Props) {
  const { children } = props;
  const classes = useStyles(props);
  const showHeader = props.showHeader;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const bread = useSelector<any, IRuta>((state) => {
    return state.storeRuta;
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <NavigatorMobile
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <NavigatorMobile PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          {showHeader && <HeaderMobile onDrawerToggle={handleDrawerToggle} />}
          {bread && <BreadCrumb enlaces={bread} />}
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};
