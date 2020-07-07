import "../style/main.scss";
import React from "react";
import { Provider } from "react-redux";
import App, { Container ,  AppContext  } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store";
interface Props {
  store: any;
}
export default withRedux(initStore)(
  class MyApp extends App<Props> {
    static async getInitialProps({ Component, ctx }:AppContext) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
