import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { ChannelData } from '@/types/apis/channelList'

import Slider from 'react-slick'
const Channel: React.FC = () => {
    useChannelList()
    // const channelList = useSelector(ChannelListSelectors.getChannelList)
    const channelList = [
        {
            cid: '01',
            channelName: '女士服飾',
            categoryType: 'channel',
            imageUrl:
                'https://shoplineimg.com/587d8a1e59d524171c0004ce/5eaa70af7c81f088f704115c/800x.webp?source_format=jpg',
            categoryList: [
                {
                    cid: '10',
                    cName: '服飾',
                    categoryType: 'channelCategory',
                    cData: [
                        { cid: '20', cName: '洋服', categoryType: 'subCategory' },
                        { cid: '21', cName: '上衣', categoryType: 'subCategory' },
                    ],
                },
                {
                    cid: '11',
                    cName: '包款',
                    categoryType: 'channelCategory',
                    cData: [
                        { cid: '22', cName: '斜背包', categoryType: 'subCategory' },
                        { cid: '23', cName: '肩背包', categoryType: 'subCategory' },
                    ],
                },
            ],
        },
        {
            cid: '02',
            channelName: '微風超市',
            categoryType: 'channel',
            imageUrl:
                'https://shoplineimg.com/587d8a1e59d524171c0004ce/5eaa70c63454aa0012d727af/800x.webp?source_format=jpg',
            categoryList: [],
        },
        {
            cid: '03',
            channelName: '餐飲票券',
            categoryType: 'channel',
            imageUrl:
                'https://shoplineimg.com/587d8a1e59d524171c0004ce/5eaa70d88e7ea90027a19d5b/800x.webp?source_format=jpg',
            categoryList: [],
        },
        {
            cid: '03',
            channelName: '餐飲票券',
            categoryType: 'channel',
            imageUrl:
                'https://shoplineimg.com/587d8a1e59d524171c0004ce/5eaa70d88e7ea90027a19d5b/800x.webp?source_format=jpg',
            categoryList: [],
        },
    ]
    console.log('channelList :>> ', JSON.stringify(channelList))
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        variableWidth: true,
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
            {
                breakpoint: 0,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                },
            },
        ],
    }

    return (
        <Slider {...settings}>
            {channelList.map((item: ChannelData | null, index: number) => {
                return (
                    <div key={index} style={{ width: "28rem" }}>
                        <figure className="product-media">
                            <img src={item?.imageUrl} alt="Product image" className="product-image" />
                            {/* <Link href={`category/${item?.cid}`}>
                                <img src={item?.imageUrl} alt="Product image" className="product-image" />
                            </Link> */}
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
