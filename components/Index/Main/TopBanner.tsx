import React from 'react'
import { useBanner } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { BannerData } from '@/types/apis/banner'
import Slider, { CustomArrowProps } from 'react-slick'
// import Link from 'next/link'

const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }: CustomArrowProps) => {
    const classStyle = `${className} topBannerArrow left`
    return (
        <div className={classStyle} style={{ ...style, display: 'block' }} onClick={onClick}>
            <img src="/images/custom/home_banner_arrow_left_n.png" />
        </div>
    )
}

const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }: CustomArrowProps) => {
    const classStyle = `${className} topBannerArrow right`
    return (
        <div className={classStyle} style={{ ...style, display: 'block' }} onClick={onClick}>
            <img src="/images/custom/home_banner_arrow_right_n.png" />
        </div>
    )
}

const TopBanner: React.FC = () => {
    useBanner()
    const bannerList = useSelector(BannerSelectors.getBannerList)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        cssEase: 'linear',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                        <div className="intro-content no-padding" style={{ height: '100vh' }}>
                            <video autoPlay muted loop className="video">
                                <source
                                    src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov"
                                    type="video/mp4"
                                />
                            </video>
                            <div className="textFrame">
                                <h3 className="intro-subtitle text-white">{item?.desc}</h3>
                                <h1 className="intro-title text-white">{item?.desc}</h1>
                                <a href={item?.linkUrl} target="blank" className="btn btn-outline-white">
                                    <span>DISCOVER MORE</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>
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
