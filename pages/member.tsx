import React from 'react'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
// import { withTranslation, i18n } from '@/I18n'
type MemberProps = {
    t: TFunction
}
const Member: React.FC<MemberProps> = ({ t }: MemberProps): JSX.Element => {
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: '會員專區',
            link: '',
        },
    ]
    return (
        <div className="page-wrapper">
            <Header isIndex={false} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            Shopping Cart<span>Shop</span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
            </main>
            <div className="member-frame"></div>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
