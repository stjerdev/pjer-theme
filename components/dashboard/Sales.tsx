import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Sales = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
            Last 7 days
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          bar
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

export default Sales;
