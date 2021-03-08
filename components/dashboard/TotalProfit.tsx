import React from "react"
import clsx from "clsx"
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors,
} from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/PeopleOutlined"

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56,
  },
}))

const TotalProfit = ({ ...rest }) => {
  const classes = useStyles()

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Nuevos justiciables
            </Typography>
            <Typography color="textPrimary" variant="h3">
              32
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
            <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TotalProfit
