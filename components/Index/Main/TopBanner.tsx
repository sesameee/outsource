import React, { useEffect, useState, useRef } from 'react'
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

    const elementRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        if (elementRef) {
            const ele = (elementRef && elementRef?.current && elementRef.current.clientHeight) || 0
            setHeight(ele)
        }
    }, [bannerList])
    const BannerItem = (item: BannerData) => {
        switch (item.contentType) {
            case 'image':
                return (
                    <div className="intro-content text-center" style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute' }}>
                            <h3 className="intro-subtitle text-white">{item?.desc}</h3>
                            <h1 className="intro-title text-white">{item?.desc}</h1>

                            <a href={item?.linkUrl} target="blank" className="btn btn-outline-white">
                                <span>DISCOVER MORE</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                        <img src={item?.sourceUrl} width="100%" />
                    </div>
                )
            case 'video':
                return (
                    <div className="intro-content no-padding" style={{}}>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video"
                            style={{ objectFit: 'cover', height: height }}
                        >
                            <source src={item?.sourceUrl} type="video/mp4" />
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
                )
            case 'youtube':
                return (
                    <div className="intro-content no-padding">
                        <iframe
                            className="video"
                            src={item?.sourceUrl}
                            allow="autoplay"
                            style={{ border: 'none', height: height }}
                        ></iframe>
                        <div className="textFrame">
                            <h3 className="intro-subtitle text-white">{item?.desc}</h3>
                            <h1 className="intro-title text-white">{item?.desc}</h1>
                            <a href={item?.linkUrl} target="blank" className="btn btn-outline-white">
                                <span>DISCOVER MORE</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                )
            default:
                break
        }
    }

    return bannerList.length > 0 ? (
        <Slider {...settings} className="intro-slider">
            {bannerList.map((item: BannerData | null, index: number) => {
                return (
                    <div key={index} className="intro-slide" ref={elementRef}>
                        {item && BannerItem(item)}
                    </div>
                )
            })}
        </Slider>
    ) : (
        <span className="slider-loader text-white"></span>
    )
}

export default TopBanner
