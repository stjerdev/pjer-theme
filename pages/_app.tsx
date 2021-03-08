import { AppProps } from "next/app";
import React from "react";
import RootApp from "./RootApp";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <RootApp Component={Component} pageProps={pageProps} />;
}
