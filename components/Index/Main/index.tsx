import React from 'react'
import Channel from './Channel'
import TopBanner from './TopBanner'
import BreezeDaily from './BreezeDaily'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import Recommend from './Recommend'

type MainProps = {
    t: TFunction
}
const Main: React.FC<MainProps> = ({ t }: MainProps) => {
    return (
        <main className="main">
            <div className="intro-slider-container mb-3 mb-lg-5">
                <TopBanner />
            </div>
            <Recommend />
            <div className="bg-lighter pt-5 pb-5 mb-5">
                <div className="container">
                    <div className="heading text-center mb-4">
                        <h2 className="title">{t('category_title')}</h2>
                        {/* <p className="title-desc">{t('category_desc')}</p> */}
                    </div>
                    <Channel />
                </div>
            </div>
            <div className="container">
                <div className="heading text-center mb-4">
                    <h2 className="title">{t('breezedaily_title')}</h2>
                    {/* <p className="title-desc">{t('breezedaily_desc')}</p> */}
                </div>
                <BreezeDaily />
            </div>
        </main>
    )
}

export default withTranslation('translations')(Main)
