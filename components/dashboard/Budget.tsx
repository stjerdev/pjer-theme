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
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import MoneyIcon from "@material-ui/icons/Money"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.red[900],
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1),
  },
}))

const Budget = ({...rest }) => {
  const classes = useStyles()

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Total de Expedientes
            </Typography>
            <Typography color="textPrimary" variant="h3">
              3000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Que el mes pasado
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}


export default Budget
