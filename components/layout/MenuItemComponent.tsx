import React from "react"
import ListItem from "@material-ui/core/ListItem"
import Link from "next/link"
import { makeStyles, createStyles } from "@material-ui/core"

const useStyles = makeStyles((_theme) =>
  createStyles({
    vinculo: {
      color: "transparent",
      liststyle: "none",
      textdecoration: "none",
      display: "flex",
      alignitems: "center",
    },
  }),
)

export interface AppMenuItemComponentProps {
  className?: string
  link?: string | null // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  a?: boolean
}

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = (props) => {
  const { className, onClick, link, children, a } = props
  const classes = useStyles()

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== "string") {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  if (!!a) {
    return (
      <a href={link} target="_blank" className={classes.vinculo}>
        <ListItem
          button
          className={className}
          children={children}
          onClick={onClick}
        />
      </a>
    )
  }

  // Return a ListItem with a link component
  return (
    <Link href={link}>
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    </Link>
  )
}

export default AppMenuItemComponent
