import React from 'react'

import Header from '@/components/Header'
// import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import ItemList from '@/components/WishList/ItemList'
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
            title: '願望清單',
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
                            願望清單<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
                <div className="container">
                    <div className="member-frame">
                        <ul className="frame-left"></ul>
                        <div className="frame-right">
                            <table className="table table-wishlist table-mobile">
                                <thead>
                                    <tr>
                                        <th>商品名稱</th>
                                        <th>商品售價</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <ItemList />
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
