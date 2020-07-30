import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { ChannelData } from '@/types/apis/channelList'

import Slider from 'react-slick'
const Channel: React.FC = () => {
    useChannelList()
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                },
            },
        ],
    }
    return (
        <Slider {...settings}>
            {channelList.map((item: ChannelData | null, index: number) => {
                return (
                    <div key={index} style={{ width: '28rem' }}>
                        <figure className="product-media">
                            <Link href={`category/${item?.cid}`}>
                                <img src={item?.imageUrl} alt="Product image" className="product-image" />
                            </Link>
                        </figure>
                        <div className="product-body">
                            <h3 className="product-title text-center">
                                <Link href={`category/${item?.cid}`}>{item?.channelName}</Link>
                            </h3>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default memo(Channel)
