import React from 'react'

import Header from '@/components/Header'
// import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { useTranslation } from '@/I18n'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Link from 'next/link'
// import { withTranslation, i18n } from '@/I18n'

const CheckoutResult: React.FC<WithRouterProps> = ({ router }: WithRouterProps): JSX.Element => {
    console.log('router :>> ', router)
    enum resultType {
        success = 1,
        fail = 2,
    }
    const { t } = useTranslation()
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: t('confirm_payment'),
            link: '',
        },
    ]

    const resultComponent = (type: number) => {
        switch (type) {
            case resultType.success:
                return (
                    <div className="result-frame">
                        <img className="icon" src="/images/custom/success.png" />
                        <h3 className="main-color main-word">{t('payment_succeed')}</h3>
                        <div className="tips">{t('thanks_for_your_purchase')}</div>
                        <div className="btn-frame">
                            <Link href="/member/order">
                                <button type="button" className="btn btn-outline-primary-2">
                                {t('check_online_shopping_record')}
                                </button>
                            </Link>
                            <Link href="/">
                                <button type="button" className="btn btn-outline-primary-2">
                                {t('back_to_homepage')}
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            case resultType.fail:
                return (
                    <div className="result-frame">
                        <img className="icon" src="/images/custom/fail.png" />
                        <h3 className="main-color main-word">{t('payment_failed')}</h3>
                        <div className="tips">{t('payment_failed_message')}</div>
                        <div className="btn-frame">
                            <button type="button" className="btn btn-outline-primary-2">
                            {t('re_pay')}
                            </button>
                            <button type="button" className="btn btn-outline-primary-2">
                            {t('back_to_homepage')}
                            </button>
                        </div>
                    </div>
                )

            default:
                break
        }
    }

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
                        {t('confirm_payment')}<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
                <div className="container">
                    {router.query && router.query.type && resultComponent(Number(router.query.type))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withRouter(CheckoutResult)
