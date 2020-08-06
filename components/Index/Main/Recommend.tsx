import React from 'react'
import { useSelector } from 'react-redux'

import { useRecommend } from '@/hooks/Banner'
import { BannerSelectors } from '@/store'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import Link from 'next/link'

type RecommendProps = {
    t: TFunction
}
const Recommend: React.FC<RecommendProps> = ({ t }: RecommendProps) => {
    useRecommend()
    const [item1, item2, item3, item4] = useSelector(BannerSelectors.getRecommendList)

    return (
        <div className="container recommend">
            <div className="heading text-center mb-4">
                <h2 className="title">{t('buy_titile')}</h2>
                {/* <p className="title-desc">{t('buy_desc')}</p> */}
            </div>
            <div className="row">
                {item1 ? (
                    <div className="col-md-6">
                        <div
                            className="banner banner-display banner-link-anim banner-title-hidden banner-1"
                            style={{
                                backgroundImage: `url(${item1?.sourceUrl})`,
                            }}
                        >
                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    {item1 ? <Link href={`category/${item1?.cid}`}>{item1?.desc}</Link> : null}
                                </h3>
                                {item1 ? (
                                    <Link href={`category/${item1?.cid}`}>
                                        <a className="btn btn-outline-white banner-link">Discover Now</a>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : null}

                <div className="col-md-6">
                    {item2 ? (
                        <div
                            className="banner banner-display banner-link-anim banner-title-hidden banner-2"
                            style={{
                                backgroundImage: `url(${item2?.sourceUrl})`,
                            }}
                        >
                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    {item2 ? <Link href={`category/${item2?.cid}`}>{item2?.desc}</Link> : null}
                                </h3>
                                {item2 ? (
                                    <Link href={`category/${item2?.cid}`}>
                                        <a className="btn btn-outline-white banner-link">Discover Now</a>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                    {item3 ? (
                        <div
                            className="banner banner-display banner-link-anim banner-3"
                            style={{
                                backgroundImage: `url(${item3?.sourceUrl})`,
                            }}
                        >
                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    {item3 ? <Link href={`category/${item3?.cid}`}>{item3?.desc}</Link> : null}
                                </h3>
                                {item3 ? (
                                    <Link href={`category/${item3?.cid}`}>
                                        <a className="btn btn-outline-white banner-link">Discover Now</a>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    {item4 ? (
                        <div
                            className="banner banner-display banner-link-anim banner-title-hidden banner-4"
                            style={{
                                backgroundImage: `url(${item4?.sourceUrl})`,
                            }}
                        >
                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    {item4 ? <Link href={`category/${item4?.cid}`}>{item4?.desc}</Link> : null}
                                </h3>
                                {item4 ? (
                                    <Link href={`category/${item4?.cid}`}>
                                        <a className="btn btn-outline-white banner-link">Discover Now</a>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="mb-3"></div>
        </div>
    )
}

export default withTranslation('translations')(Recommend)
