// import React, { FC } from 'react'
import React from 'react'
import App, { AppContext } from 'next/app'

import { wrapper } from '@/store/rootStore'
import '@/styles/slick.scss'
import '@/styles/slick-theme.scss'
import '@/styles/bootstrap.min.scss'
import '@/styles/owl.scss'
import '@/styles/popup.scss'
import '@/styles/style.scss'
import '@/styles/main.scss'
import '@/styles/custom.scss'
import { appWithTranslation, i18n } from '../I18n'
class MyApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return { pageProps }
    }

    render() {
        i18n.changeLanguage('tw')
        const { Component, pageProps } = this.props

        return <Component {...pageProps} />
    }
}

export default wrapper.withRedux(appWithTranslation(MyApp))
// const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
