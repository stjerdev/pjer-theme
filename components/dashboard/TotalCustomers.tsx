import React from "react"
import clsx from "clsx"
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
} from "@material-ui/core"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import DescriptionIcon from "@material-ui/icons/Description"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.blue[600],
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.green[900],
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1),
  },
}))

const TotalCustomers = ({ ...rest }) => {
  const classes = useStyles()

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Total de movimientos
            </Typography>
            <Typography color="textPrimary" variant="h3">
              8,600
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            15%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Que el mes pasado
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TotalCustomers
