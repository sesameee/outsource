import React from 'react'
import { useSelector } from 'react-redux'

import { useRecommend } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { BannerData } from '@/types/apis/banner'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'

type RecommendProps = {
    t: TFunction
}
const Recommend: React.FC<RecommendProps> = ({ t }: RecommendProps) => {
    useRecommend()
    const recommendList = useSelector(BannerSelectors.getRecommendList)
    console.log('recommendList :>> ', recommendList)
    return (
        <div className="container">
            <div className="heading text-center mb-4">
                <h2 className="title">{t('buy_titile')}</h2>
                <p className="title-desc">{t('buy_desc')}</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="banner banner-display banner-link-anim banner-title-hidden banner-1">
                        <a href="#">
                            <img src="/images/demos/demo-12/banners/banner-1.jpg" alt="Banner" />
                        </a>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white">
                                <a href="#">This Week's Most Wanted</a>
                            </h3>
                            <a href="#" className="btn btn-outline-white banner-link">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="banner banner-display banner-link-anim banner-title-hidden banner-2">
                        <a href="#">
                            <img src="/images/demos/demo-12/banners/banner-2.jpg" alt="Banner" />
                        </a>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white">
                                <a href="#">Bags by Mood</a>
                            </h3>
                            <a href="#" className="btn btn-outline-white banner-link">
                                Discover Now
                            </a>
                        </div>
                    </div>
                    <div className="banner banner-display banner-link-anim banner-3">
                        <a href="#">
                            <img src="/images/demos/demo-12/banners/banner-3.jpg" alt="Banner" />
                        </a>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white">
                                <a href="#">The Trend Story</a>
                            </h3>
                            <a href="#" className="btn btn-outline-white banner-link">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="banner banner-display banner-link-anim banner-title-hidden banner-4">
                        <a href="#">{/* <img src="/images/demos/demo-12/banners/banner-1.jpg" alt="Banner" /> */}</a>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white">
                                <a href="#">This Week's Most Wanted</a>
                            </h3>
                            <a href="#" className="btn btn-outline-white banner-link">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3"></div>
        </div>
    )
}

export default withTranslation('translations')(Recommend)
