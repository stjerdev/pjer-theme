import React from "react";
import useRuta from "../components/utils/useRuta";
import Budget from "../components/dashboard/Budget";
import TotalCustomers from "../components/dashboard/TotalCustomers";
import TasksProgress from "../components/dashboard/TasksProgress";
import TotalProfit from "../components/dashboard/TotalProfit";
import LatestProducts from "../components/dashboard/LatestProducts";
import LatestOrders from "../components/dashboard/LatestOrders";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    grid: {
      display: "flex",
      padding: "1%",
    },
  })
);

const Index = () => {
  useRuta({ link: "/", ruta: "Inicio" });
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item lg={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} xs={12}>
          <TotalCustomers />
        </Grid>
        <Grid item lg={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} xs={12}>
          <TotalProfit />
        </Grid>
   
        <Grid item lg={3}  xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={9}  xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
