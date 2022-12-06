import { Provider } from "react-redux";
import "@styles/globals.css";
import { store } from "@appredux/store";
import type { AppProps } from "next/app";
import LayoutComponent from "@components/layout.component";
import React from "react";
import ErrorBoundary from "@components/error-boundary.component";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const isPageMainPage = [`/`].includes(appProps.router.pathname);

  const Layout = isPageMainPage ? React.Fragment : LayoutComponent;
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
}
