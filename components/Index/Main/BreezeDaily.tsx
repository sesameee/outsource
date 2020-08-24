import React, { memo } from 'react'
import { useBreezeDaily } from '@/hooks/BreezeDaily'
import { BreezeDailySelectors } from '@/store'
import { useSelector } from 'react-redux'

const BreezeDaily: React.FC = () => {
    useBreezeDaily()
    const [List1, List2, List3, List4] = useSelector(BreezeDailySelectors.getBreezeDailyList)
    return (
        <div className="row breeze-daily">
            {List1 ? (
                <div className="col-sm-6 col-lg-4">
                    <div
                        className="banner banner-display banner-link-anim dailyType1"
                        style={{
                            backgroundImage: `url(${List1?.imageUrl})`,
                        }}
                    >
                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white">
                                <a href={List1?.linkUrl} target="blank">
                                    {List1?.desc}
                                </a>
                            </h3>
                            <a href={List1?.linkUrl} target="blank" className="btn btn-outline-white banner-link">
                                Discover Now
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}

            {List2 ? (
                <div className="col-sm-6 col-lg-4 order-lg-last ">
                    <div
                        className="banner banner-display banner-link-anim dailyType1"
                        style={{ backgroundImage: `url(${List2?.imageUrl})` }}
                    >
                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white">
                                <a href={List2?.linkUrl} target="blank">
                                    {List2?.desc}
                                </a>
                            </h3>
                            <a href={List2?.linkUrl} target="blank" className="btn btn-outline-white banner-link">
                                Discover Now
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="col-lg-4">
                <div className="row">
                    {List3 ? (
                        <div className="col-sm-6 col-lg-12 ">
                            <div
                                className="banner banner-display banner-link-anim dailyType2"
                                style={{ backgroundImage: `url(${List3?.imageUrl})` }}
                            >
                                <div className="banner-content banner-content-center">
                                    <h3 className="banner-title text-white">
                                        <a href={List3?.linkUrl} target="blank">
                                            {List3?.desc}
                                        </a>
                                    </h3>
                                    <a
                                        href={List3?.linkUrl}
                                        target="blank"
                                        className="btn btn-outline-white banner-link"
                                    >
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {List4 ? (
                        <div className="col-sm-6 col-lg-12">
                            <div
                                className="banner banner-display banner-link-anim dailyType2"
                                style={{ backgroundImage: `url(${List4?.imageUrl})` }}
                            >
                                <div className="banner-content banner-content-center">
                                    <h3 className="banner-title text-white">
                                        <a href={List4?.linkUrl} target="blank">
                                            {List4?.desc}
                                        </a>
                                    </h3>
                                    <a
                                        href={List4?.linkUrl}
                                        target="blank"
                                        className="btn btn-outline-white banner-link"
                                    >
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
export default memo(BreezeDaily)
// background-image: url(https://www.breezedaily.com.tw/wp-content/uploads/2020/07/wu-700x585.png);
// height: 92%;
// background-repeat: no-repeat;
// background-size: cover;
