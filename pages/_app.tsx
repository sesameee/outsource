// import React, { FC } from 'react'
import React from 'react'
import App, { AppContext } from 'next/app'

import { wrapper } from '@/store/rootStore'
import 'react-pro-sidebar/dist/css/styles.css'
import '@/styles/slick.scss'
import '@/styles/slick-theme.scss'
import '@/styles/bootstrap.min.scss'
import '@/styles/owl.scss'
import '@/styles/popup.scss'
import '@/styles/style.scss'
import '@/styles/main.scss'
import '@/styles/custom.scss'
import { appWithTranslation, i18n } from '../I18n'
import { getCookie, setCookie } from '@/utils'
import { UserLoginActions, ShoppingCartListActions, WishListActions } from '@/store'
import { NextPageContext } from 'next'
import cookies from 'next-cookies'
import httpServiceModel from '@/services/api/HttpService'

const cookieServerProgress = (ctx: NextPageContext) => {
    const uuid = cookies(ctx).uuid !== undefined ? (cookies(ctx).uuid as string) : ''
    const memberId = cookies(ctx).memberId !== undefined ? (cookies(ctx).memberId as string) : ''
    const userId = cookies(ctx).userId !== undefined ? (cookies(ctx).userId as string) : ''
    const token = cookies(ctx).token !== undefined ? (cookies(ctx).token as string) : ''
    const accessToken = cookies(ctx).accessToken !== undefined ? (cookies(ctx).accessToken as string) : ''
    const cartList = cookies(ctx).cartList !== undefined ? (cookies(ctx).cartList as string) : ''
    const wishList = cookies(ctx).wishList !== undefined ? (cookies(ctx).wishList as string) : ''
    const promoCode = cookies(ctx).promoCode !== undefined ? (cookies(ctx).promoCode as string) : ''
    const UserLoginData = {
        code: '0000',
        data: {
            memberId,
            token,
            accessToken,
            userId,
            uuid,
        },
        message: 'cookie',
    }
    accessToken && ctx.store.dispatch(UserLoginActions.fetchUserLoginSuccess({ UserLoginData }))
    cartList && ctx.store.dispatch(ShoppingCartListActions.setShoppingCartListCookie({ data: cartList }))
    promoCode && ctx.store.dispatch(ShoppingCartListActions.setPromoCode({ promoCode }))
    wishList && ctx.store.dispatch(WishListActions.setWishListCookie({ data: wishList }))
}
class MyApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        const protocol = ctx.req?.headers?.referer?.split('://')[0]
        protocol && (httpServiceModel.protocal = protocol)
        cookieServerProgress(ctx)
        return {
            pageProps,
        }
    }
    componentDidMount() {
        if (getCookie('i18n') == null) {
            setCookie('i18n', 'tw')
            i18n.changeLanguage('tw')
        }
        if (location.protocol !== `${httpServiceModel.protocal}:`) {
            httpServiceModel.protocal = location.protocol.replace(':', '')
        }
    }
    render() {
        const { Component, pageProps } = this.props

        return <Component {...pageProps} />
    }
}

export default wrapper.withRedux(appWithTranslation(MyApp))
// const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
