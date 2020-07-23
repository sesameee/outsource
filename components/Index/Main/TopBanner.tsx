import React from 'react'
import { useBanner } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { BannerData } from '@/types/apis/banner'
import Slider from 'react-slick'
// import Link from 'next/link'
const TopBanner: React.FC = () => {
    useBanner()
    const bannerList = useSelector(BannerSelectors.getBannerList)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 5000,
        cssEase: 'linear',
    }

    return bannerList.length > 0 ? (
        <Slider {...settings} className="intro-slider">
            {bannerList.map((item: BannerData | null, index: number) =>
                item?.contentType == 'image' ? (
                    <div key={index} className="intro-slide">
                        <div
                            className="intro-content text-center"
                            style={{ backgroundImage: `url(${item?.sourceUrl})`, height: '100vh' }}
                        >
                            <h3 className="intro-subtitle text-white">{item?.desc}</h3>
                            <h1 className="intro-title text-white">{item?.desc}</h1>
                            <a href={item?.linkUrl} target="blank" className="btn btn-outline-white">
                                <span>DISCOVER MORE</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="intro-slide" key={index}>
                        <div className="intro-content no-padding">
                            <video autoPlay muted loop>
                                <source src="/video/1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                ),
            )}
        </Slider>
    ) : (
        <span className="slider-loader text-white"></span>
    )
}

export default TopBanner
