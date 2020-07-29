import React from 'react'
import Channel from './Channel'
import TopBanner from './TopBanner'
import BreezeDaily from './BreezeDaily'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'

type MainProps = {
    t: TFunction
}
const Main: React.FC<MainProps> = ({ t }: MainProps) => {
    return (
        <main className="main">
            <div className="intro-slider-container mb-3 mb-lg-5">
                <TopBanner />
            </div>

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
                            <a href="#">
                                {/* <img src="/images/demos/demo-12/banners/banner-1.jpg" alt="Banner" /> */}
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
                </div>

                <div className="mb-3"></div>
            </div>

            <div className="bg-lighter pt-5 pb-5 mb-5">
                <div className="container">
                    <div className="heading text-center mb-4">
                        <h2 className="title">{t('category_title')}</h2>
                        <p className="title-desc">{t('category_desc')}</p>
                    </div>
                    <Channel />
                </div>
            </div>
            <div className="container">
                <div className="heading text-center mb-4">
                    <h2 className="title">{t('breezedaily_title')}</h2>
                    <p className="title-desc">{t('breezedaily_desc')}</p>
                </div>
                <BreezeDaily />
                {/* <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="banner banner-display banner-link-anim">
                            <a href="#">
                                <img src="/images/demos/demo-12/banners/banner-4.jpg" alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    <a href="#">Accessories</a>
                                </h3>
                                <h4 className="banner-subtitle text-white">
                                    <a href="#">16 Items</a>
                                </h4>
                                <a href="#" className="btn btn-outline-white banner-link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4 order-lg-last">
                        <div className="banner banner-display banner-link-anim">
                            <a href="#">
                                <img src="/images/demos/demo-12/banners/banner-5.jpg" alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    <a href="#">Jewellery</a>
                                </h3>
                                <h4 className="banner-subtitle text-white">
                                    <a href="#">8 Items</a>
                                </h4>
                                <a href="#" className="btn btn-outline-white banner-link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-sm-6 col-lg-12">
                                <div className="banner banner-display banner-link-anim">
                                    <a href="#">
                                        <img src="/images/demos/demo-12/banners/banner-6.jpg" alt="Banner" />
                                    </a>

                                    <div className="banner-content banner-content-center">
                                        <h3 className="banner-title text-white">
                                            <a href="#">Clothing</a>
                                        </h3>
                                        <h4 className="banner-subtitle text-white">
                                            <a href="#">24 Items</a>
                                        </h4>
                                        <a href="#" className="btn btn-outline-white banner-link">
                                            Discover Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-12">
                                <div className="banner banner-display banner-link-anim">
                                    <a href="#">
                                        <img src="/images/demos/demo-12/banners/banner-7.jpg" alt="Banner" />
                                    </a>

                                    <div className="banner-content banner-content-center">
                                        <h3 className="banner-title text-white">
                                            <a href="#">Shoes</a>
                                        </h3>
                                        <h4 className="banner-subtitle text-white">
                                            <a href="#">6 Items</a>
                                        </h4>
                                        <a href="#" className="btn btn-outline-white banner-link">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </main>
    )
}

export default withTranslation('translations')(Main)
