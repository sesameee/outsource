import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
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
            title: '關於微風集團',
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
                            關於微風集團<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />

                <div className="container about">
                    <img src="/images/custom/about.jpg" />
                    <h2 className="title text-left mb-3">關於微風集團</h2>
                    <p style={{ marginBottom: '4rem' }}>
                        微風集團1975年創業以來，秉持著「For the
                        Customers」企業理念落實於具體行動，一路走來，在消費者與社會大眾的支持與愛護下成長茁壯。近年來消費者的需求以及生活型態變化極大，我們期許成為全台顧客滿意度第一的購物中心，如同微風企業標語「新奇、High
                        Image的微風」所傳遞的意念，每天提供新奇的商品與服務，讓顧客有賓至如歸的感受，享受購物的樂趣。
                        2001年10月--位於復興南路一段的大型購物中心--微風廣場，將零售、餐飲、休閒、服務結為一體的多功能購物空間。
                        2013年9月--微風南京開幕，秉持一貫精神「Something New Something
                        Special」，引進新的品牌專櫃與深受消費者喜愛的名品店家。
                        2014年10月--微風松高開幕，引領信義區潮流新指標
                        2015年11月--微風信義店開幕，成為信義區時尚精品新指標!!
                        2019年01月--微風南山店開幕，成為信義區最新時尚潮流與國際餐飲代名詞，開幕當天15萬人朝聖!!
                        2020年8月27日--微風線上精品正式上線，提供精緻的線上購物體驗。每一家店均能引領風騷，除了能滿足不同客層的需求之外。期許微風集團能成為提供消費者更豐富生活之企業。
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
