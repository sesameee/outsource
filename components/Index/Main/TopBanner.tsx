import React from 'react'
import dynamic from 'next/dynamic'
import { useBanner } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { BannerData } from '@/types/apis/banner'
// import Link from 'next/link'

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false })
const TopBanner: React.FC = () => {
    useBanner()
    const bannerList = useSelector(BannerSelectors.getBannerList)
    console.log('bannerListAAA :>> ', bannerList)
    return (
        <OwlCarousel
            items={1}
            nav={false}
            loop={false}
            className="intro-slider owl-carousel owl-simple owl-nav-inside owl-light"
            data-toggle="owl"
            data-owl-options='{"nav":false, "dots": false, "loop": false}'
        >
            {bannerList.map((item: BannerData | null, index: number) =>
                item?.contentType == 'image' ? (
                    <div key={index} className="intro-slide" style={{ backgroundImage: `url(${item?.sourceUrl})` }}>
                        <div className="container intro-content text-center">
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
                        <video autoPlay muted loop className="intro-content">
                            <source src="/video/1.mp4" type="video/mp4" />
                        </video>
                    </div>
                ),
            )}
        </OwlCarousel>
    )
}

export default TopBanner
