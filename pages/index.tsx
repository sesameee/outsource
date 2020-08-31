import React from 'react'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import { i18n } from '@/I18n'
import { NextPage } from 'next'

const TopPage: NextPage<any> = (): JSX.Element => {
    i18n.changeLanguage('tw')
    return (
        <div className="page-wrapper">
            <Header isIndex={true} />
            <Main />
            <Footer />
        </div>
    )
}
export default TopPage
