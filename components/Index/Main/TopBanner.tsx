import React, { useEffect, useState, useRef } from 'react'
import { useBanner } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { BannerData } from '@/types/apis/banner'
import Slider, { CustomArrowProps } from 'react-slick'
import { useWindowSize } from '@/hooks/Utils'
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
        autoplay: true,
        speed: 500,
        cssEase: 'linear',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const elementRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const windowSize = useWindowSize()
    useEffect(() => {
        if (elementRef) {
            const w = (elementRef && elementRef?.current && elementRef.current.clientWidth) || 0
            setWidth(w)
        }
    }, [bannerList, windowSize])
    const bannerHeight = () => {
        return width > 1200 ? 0.56 * 1 * width : 0.56 * 1.5 * width
    }
    const BannerItem = (item: BannerData) => {
        switch (item.contentType) {
            case 'image':
                return (
                    <a href={item?.linkUrl} target="blank">
                        <div
                            className="intro-content text-center"
                            style={{ backgroundImage: `url(${item?.sourceUrl})`, height: `${bannerHeight()}px` }}
                        ></div>
                    </a>
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
                            style={{ objectFit: 'cover', height: bannerHeight() }}
                        >
                            <source src={item?.sourceUrl} type="video/mp4" />
                        </video>
                    </div>
                )
            case 'youtube':
                return (
                    <div
                        className="intro-content no-padding text-center"
                        style={{ position: 'relative', height: bannerHeight() }}
                    >
                        <iframe
                            className="video"
                            src={item?.sourceUrl}
                            allow="autoplay"
                            style={{ border: 'none', height: bannerHeight() }}
                        ></iframe>
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
