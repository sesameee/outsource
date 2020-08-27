import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import Collapse from '@/components/commons/Collapse'
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
            title: t('q_n_a'),
            link: '',
        },
    ]

    const memberList = [
        {
            title: t('member_q_1'),
            content: [
                t('member_a_1_1'),
                t('member_a_1_2'),
            ],
        },
        {
            title: t('member_q_2'),
            content: t('member_a_2'),
        },
        {
            title: t('member_q_3'),
            content: t('member_a_3'),
        },
        {
            title: t('member_q_4'),
            content: t('member_a_4'),
        },
        {
            title: t('member_q_5'),
            content: t('member_a_5'),
        },
        {
            title: t('member_q_6'),
            content: t('member_a_6'),
        },
        {
            title: t('member_q_7'),
            content: t('member_a_7'),
        },
    ]

    const orderList = [
        {
            title: t('order_q_1'),
            content: t('order_a_1'),
        },
        {
            title: t('order_q_2'),
            content: t('order_a_2'),
        },
        {
            title: t('order_q_3'),
            content: [
                t('order_a_3_1'),
                t('order_a_3_2'),
            ],
        },
        {
            title: t('order_q_4'),
            content: t('order_a_4'),
        },
        {
            title: t('order_q_5'),
            content: [
                t('order_a_5_1'),
                t('order_a_5_2'),
                t('order_a_5_3'),
            ],
        },
        {
            title: t('order_q_6'),
            content: [
                t('order_a_6_1'),
                t('order_a_6_2'),
                t('order_a_6_3'),
            ],
        },
        {
            title: t('order_q_7'),
            content: t('order_a_7'),
        },
        {
            title: t('order_q_8'),
            content: t('order_a_8'),
        },
        {
            title: t('order_q_9'),
            content: t('order_a_9'),
        },
        {
            title: t('order_q_10'),
            content: t('order_a_10'),
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
                            {t('q_n_a')}<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />

                <div className="container">
                    <h2 className="title text-center mb-3">{t('member_problem')}</h2>
                    <Collapse collapseData={memberList} />
                    <h2 className="title text-center mb-3">{t('order_problem')}</h2>
                    <Collapse collapseData={orderList} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
