import React from 'react'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
// import { withTranslation, i18n } from '@/I18n'
const TopPage = (): JSX.Element => {
    return (
        <div className="page-wrapper">
            <Header isIndex={true} />
            <Main />
            <Footer />
        </div>
    )
}
export default TopPage
