import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useBanner } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { BannerData } from '@/types/apis/banner'
import Link from 'next/link'

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false })
const Banner: React.FC = () => {
    useBanner()
    const bannerList = useSelector(BannerSelectors.getBannerList)
    return (
        <OwlCarousel
            className="owl-carousel owl-simple"
            dots
            margin={20}
            responsive={{
                '0': {
                    items: 2,
                },
                '480': {
                    items: 2,
                },
                '768': {
                    items: 3,
                },
                '992': {
                    items: 4,
                },
                '1200': {
                    items: 4,
                    nav: true,
                },
            }}
        >
            {bannerList.map((item: BannerData | null, index: number) => {
                return (
                    <div className="product product-4" key={index}>
                        <figure className="product-media">
                            {item?.contentType == '1' ? (
                                <Link href={`category/${item.categoryType}`}>
                                    <img src={item?.sourceUrl} alt="Product image" className="product-image" />
                                </Link>
                            ) : (
                                <a href={item?.linkUrl} target="blank">
                                    <img src={item?.sourceUrl} alt="Product image" className="product-image" />
                                </a>
                            )}
                        </figure>
                        <div className="product-body">
                            <h3 className="product-title text-center">
                                {item?.contentType == '1' ? (
                                    <Link href={`category/${item.categoryType}`}>{item?.desc}</Link>
                                ) : (
                                    <a href={item?.linkUrl} target="blank">
                                        {item?.desc}
                                    </a>
                                )}
                            </h3>
                        </div>
                    </div>
                )
            })}
        </OwlCarousel>
    )
}

export default memo(Banner)
