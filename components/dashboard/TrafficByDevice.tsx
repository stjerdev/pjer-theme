import {
  Box,
  Card,
  CardContent,
  CardHeader,
  colors,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const TrafficByDevice = ({ ...rest }) => {
  const classes = useStyles();

  const devices = [
    {
      title: "Desktop",
      value: 63,
      icon: LaptopMacIcon,
      color: colors.indigo[500],
    },
    {
      title: "Tablet",
      value: 15,
      icon: TabletIcon,
      color: colors.red[600],
    },
    {
      title: "Mobile",
      value: 23,
      icon: PhoneIcon,
      color: colors.orange[600],
    },
  ];

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader title="Traffic by Device" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          Doughnut
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;
