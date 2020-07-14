// import React, { FC } from 'react'
import React from 'react'
import App, { AppContext } from 'next/app'

import { wrapper } from '@/store/rootStore'
import '@/styles/bootstrap.min.scss'
import '@/styles/owl.scss'
import '@/styles/popup.scss'
import '@/styles/style.scss'
import '@/styles/main.scss'
//import { appWithTranslation } from '../I18n'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

//export default wrapper.withRedux(appWithTranslation(MyApp))
export default wrapper.withRedux(MyApp)
// const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
