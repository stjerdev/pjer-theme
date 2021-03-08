import React, { useState } from "react"
import clsx from "clsx"
import { v4 as uuid } from "uuid"
import moment from "moment"
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import DescriptionIcon from "@material-ui/icons/Description"

const data = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: <DescriptionIcon />,
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: <DescriptionIcon />,
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: <DescriptionIcon />,
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: <DescriptionIcon />,
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: <DescriptionIcon />,
    updatedAt: moment().subtract(9, "hours"),
  },
]

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  image: {
    height: 48,
    width: 48,
  },
})

const LatestProducts = ({ ...rest }) => {
  const classes = useStyles()
  const [products] = useState(data)

  return (
    <Card className={clsx(classes.root)} {...rest}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Ultimos movimientos"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemIcon>{product.imageUrl}</ListItemIcon>
            <ListItemText
              primary={product.name}
              secondary={`Updated ${product.updatedAt.fromNow()}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Ver todos
        </Button>
      </Box>
    </Card>
  )
}

export default LatestProducts
