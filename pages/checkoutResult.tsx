import React from 'react'

import Header from '@/components/Header'
// import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
// import { withTranslation, i18n } from '@/I18n'
type MemberProps = {
    t: TFunction
}
const CheckoutResult: React.FC<MemberProps> = ({ t }: MemberProps): JSX.Element => {
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: '付款確認',
            link: '',
        },
    ]
    return (
        <div className="page-wrapper">
            <Header isIndex={false} token="" />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            付款確認<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
                <div className="container"></div>
            </main>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(CheckoutResult)
