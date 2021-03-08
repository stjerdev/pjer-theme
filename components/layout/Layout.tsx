import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

type Props = {
  children: React.ReactNode;
  className?: string;
  showHeader: boolean;
};

const Layout = function (props: Props) {
  const { children } = props;
  const showHeader = props.showHeader;

  const matches = useMediaQuery("(min-width:600px)");
  if (matches) {
    return <Desktop children={children} showHeader={showHeader} />;
  } else {
    return <Mobile children={children} showHeader={showHeader} />;
  }
};

export default Layout;
