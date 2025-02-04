import React from 'react'
import { useSelector } from 'react-redux'

import { useRecommend } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import Link from 'next/link'
import { BannerData } from '@/types/apis/banner'

type RecommendProps = {
    t: TFunction
}
const Recommend: React.FC<RecommendProps> = ({ t }: RecommendProps) => {
    useRecommend()
    const list = useSelector(BannerSelectors.getRecommendList)
    const [item1, item2, item3, item4] = list
    const getLink = (item: BannerData) => {
        const { linkType, linkUrl, categoryType, cid } = item
        return linkType == 1 ? linkUrl : `/category/${categoryType}/${cid}`
    }

    return (
        <div className="container recommend">
            <div className="heading text-center mb-4">
                <h2 className="title">{t('buy_titile')}</h2>
                {/* <p className="title-desc">{t('buy_desc')}</p> */}
            </div>
            <div className="pc-show">
                <div className="row">
                    {item1 ? (
                        <div className="col-md-6">
                            <Link href={getLink(item1)} prefetch={false}>
                                <div
                                    className="banner banner-display banner-link-anim banner-title-hidden banner-1"
                                    style={{
                                        backgroundImage: `url(${item1?.sourceUrl})`,
                                    }}
                                >
                                    <div className="banner-content banner-content-center">
                                        <h3 className="banner-title text-white">
                                            {item1 ? (
                                                <Link href={getLink(item1)} prefetch={false}>
                                                    {item1?.desc}
                                                </Link>
                                            ) : null}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ) : null}

                    <div className="col-md-6">
                        {item2 ? (
                            <Link href={getLink(item2)} prefetch={false}>
                                <div
                                    className="banner banner-display banner-link-anim banner-title-hidden banner-2"
                                    style={{
                                        backgroundImage: `url(${item2?.sourceUrl})`,
                                    }}
                                >
                                    <div className="banner-content banner-content-center">
                                        <h3 className="banner-title text-white">
                                            {item2 ? (
                                                <Link href={getLink(item2)} prefetch={false}>
                                                    {item2?.desc}
                                                </Link>
                                            ) : null}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ) : null}
                        {item3 ? (
                            <Link href={getLink(item3)} prefetch={false}>
                                <div
                                    className="banner banner-display banner-link-anim banner-3"
                                    style={{
                                        backgroundImage: `url(${item3?.sourceUrl})`,
                                    }}
                                >
                                    <div className="banner-content banner-content-center">
                                        <h3 className="banner-title text-white">
                                            {item3 ? (
                                                <Link href={getLink(item3)} prefetch={false}>
                                                    {item3?.desc}
                                                </Link>
                                            ) : null}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ) : null}

                        {item4 ? (
                            <Link href={getLink(item4)} prefetch={false}>
                                <div
                                    className="banner banner-display banner-link-anim banner-3"
                                    style={{
                                        backgroundImage: `url(${item4?.sourceUrl})`,
                                    }}
                                >
                                    <div className="banner-content banner-content-center">
                                        <h3 className="banner-title text-white">
                                            {item4 ? (
                                                <Link href={getLink(item4)} prefetch={false}>
                                                    {item4?.desc}
                                                </Link>
                                            ) : null}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="pc-hide">
                {list.map((item, index) => {
                    if (index > 3) {
                        return null
                    } else {
                        return (
                            <Link key={index} href={getLink(item)} prefetch={false}>
                                <img src={item.sourceUrl} width="100%" style={{ margin: '1rem 0', height: 'auto' }} />
                            </Link>
                        )
                    }
                })}
            </div>

            <div className="mb-3"></div>
        </div>
    )
}

export default withTranslation('translations')(Recommend)
