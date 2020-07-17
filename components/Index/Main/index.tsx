import React, { memo } from 'react'

//import OwlItem from './OwlItem'
// import Link from 'next/link'

const Main: React.FC = () => {
    return (
        <main className="main">
            <div className="intro-slider-container mb-3 mb-lg-5">
                <div
                    className="intro-slider owl-carousel owl-simple owl-nav-inside owl-light"
                    data-toggle="owl"
                    data-owl-options='{"nav":false, "dots": false, "loop": false}'
                >
                    <div
                        className="intro-slide"
                        style={{ backgroundImage: 'url(/images/demos/demo-12/slider/slide-1.jpg)' }}
                    >
                        <div className="container intro-content text-center">
                            <h3 className="intro-subtitle text-white">SEASONAL PICKS</h3>
                            <h1 className="intro-title text-white">Get All The Good Stuff</h1>

                            <a href="category.html" className="btn btn-outline-white">
                                <span>DISCOVER MORE</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <span className="slider-loader text-white"></span>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner banner-display banner-link-anim banner-title-hidden">
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
                        <div className="banner banner-display banner-link-anim banner-title-hidden">
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
                        <div className="banner banner-display banner-link-anim banner-title-hidden">
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

                <div className="mb-3"></div>
            </div>

            <div className="bg-lighter pt-5 pb-5 mb-5">
                <div className="container">
                    <div className="heading text-center mb-4">
                        <h2 className="title">Recent Arrivals</h2>
                        <p className="title-desc">Aliquam tincidunt mauris eurisus</p>
                    </div>
                    {/* <OwlItem /> */}
                </div>
            </div>
            <div className="container">
                <div className="heading text-center mb-4">
                    <h2 className="title">Popular Categories</h2>
                    <p className="title-desc">Vestibulum auctor dapibus neque</p>
                </div>

                <div className="row">
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
                </div>
            </div>
        </main>
    )
}

export default memo(Main)
