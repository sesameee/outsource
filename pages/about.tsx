import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'
type MemberProps = {
    t: TFunction
}
const Member: React.FC<MemberProps> = ({ t }: MemberProps): JSX.Element => {
    useBackBtnDetect()
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: t('about_breeze'),
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
                            {t('about_breeze')}
                            <span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />

                <div className="container about">
                    <img src="/images/custom/about.jpg" />
                    <h2 className="title text-left mb-3">{t('about_breeze')}</h2>
                    <p style={{ marginBottom: '4rem' }}>{t('mission_statement')}</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
