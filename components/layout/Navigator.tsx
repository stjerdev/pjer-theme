import {
  Button,
  Divider,
  Drawer,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import NavigatorList from "./NavigatorList";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "#0c2439",
    paddingLeft: "6px",
    textDecoration: "none",
    listStyle: "none",
    "&:hover,&:focus": {
      backgroundColor: "#404854",
    },
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    paddingLeft: "10px",
  },
  drawerOpen: {
    backgroundColor: "#0c2439",

    backgroundAttachment: "fixed",
    backgroundImage:
      "url(//www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png)",
    backgroundPosition: "left 0 bottom 0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "256px 556px",
    height: "100vh",
    // aca
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: "#0c2439",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  iconoMenu: {
    marginLeft: "1rem",
    marginRight: "1rem",
    fill: "#fff",
  },
}));

let TITULO_APP = (
  <p
    style={{
      color: "white",
      fontSize: "24px",
      whiteSpace: "pre-wrap",
      textAlign: "center",
      paddingLeft: "1px",
    }}
  >
    {process.env.NEXT_PUBLIC_TITULO_APP}
  </p>
);

type Props = {
  handleDrawerClose: () => void;
  open?: boolean;
};
const Navigator = function (props: Props) {
  const { handleDrawerClose, open } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div
        className={clsx(
          classes.firebase,
          classes.item,

          classes.toolbar
        )}
      >
        <Button onClick={handleDrawerClose}>
          {open ? <div style={{ marginRight: 15 }}>{TITULO_APP}</div> : ""}
          {theme.direction === "rtl" ? (
            <MenuRoundedIcon />
          ) : open ? (
            <MenuOpenRoundedIcon style={{ fill: "#fff" }} />
          ) : (
            <MenuRoundedIcon className={classes.iconoMenu} />
          )}
        </Button>
      </div>
      <Divider />
      <NavigatorList open={open} />
    </Drawer>
  );
};

export default Navigator;
