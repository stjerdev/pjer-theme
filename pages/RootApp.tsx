import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import theme from "../components/layout/Theme";
import storeApp from "../store/store";

const RootApp = (props: any) => {
  const [isNotDefined, setIsNotDefined] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsNotDefined(true);
    }
  }, [isNotDefined]);

  if (!isNotDefined) {
    return <div />;
  }

  return (
    <>
      <Provider store={storeApp}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate"></meta>
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <Layout children={<props.Component {...props} />} showHeader={true} />
      </Provider>
    </>
  );
};

export default RootApp;
