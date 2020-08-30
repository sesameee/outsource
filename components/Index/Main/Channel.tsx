import React, { memo, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { ChannelData } from '@/types/apis/channelList'
import { useRouter } from 'next/router'

import Slider from 'react-slick'
const Channel: React.FC = () => {
    useChannelList()
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                },
            },
        ],
    }
    const [dragging, setDragging] = useState(false)

    const handleBeforeChange = useCallback(() => {
        console.log('handleBeforeChange')
        setDragging(true)
    }, [setDragging])

    const handleAfterChange = useCallback(() => {
        console.log('handleAfterChange')
        setDragging(false)
    }, [setDragging])
    const router = useRouter()
    const handleOnItemClick = useCallback(
        (e, link) => {
            console.log('handleOnItemClick')
            router.push(link)
            if (dragging) e.stopPropagation()
        },
        [dragging, router],
    )

    return (
        <Slider {...settings} beforeChange={handleBeforeChange} afterChange={handleAfterChange}>
            {channelList.map((item: ChannelData | null, index: number) => {
                return (
                    <div
                        key={index}
                        style={{ width: '28rem' }}
                        onClick={(e) => handleOnItemClick(e, `/category/${item?.cid}`)}
                    >
                        <figure className="product-media">
                            <img src={item?.imageUrl} alt="Product image" className="product-image" />
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
