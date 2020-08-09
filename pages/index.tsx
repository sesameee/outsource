import React from 'react'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import { i18n } from '@/I18n'
import { NextPageContext, NextPage } from 'next'
import cookies from 'next-cookies'

type TopPageProps = {
    token: string
}

const TopPage: NextPage<any> = ({ token }: TopPageProps): JSX.Element => {
    i18n.changeLanguage('tw')
    return (
        <div className="page-wrapper">
            <Header isIndex={true} token={token} />
            <Main />
            <Footer />
        </div>
    )
}
export default TopPage

TopPage.getInitialProps = async (ctx: NextPageContext) => {
    return { token: cookies(ctx).token || '' }
}
