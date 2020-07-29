import React, { memo } from 'react'
import { useBreezeDaily } from '@/hooks/BreezeDaily'
import { BreezeDailySelectors } from '@/store'
import { useSelector } from 'react-redux'

const BreezeDaily: React.FC = () => {
    useBreezeDaily()
    const [List1, List2, List3, List4] = useSelector(BreezeDailySelectors.getBreezeDailyList)
    // console.log('breezeDailyList :>> ', breezeDailyList)
    return (
        <div className="row">
            <div className="col-sm-6 col-lg-4">
                <div className="banner banner-display banner-link-anim">
                    <a href="#">{List1 ? <img src={List1?.imageUrl} alt="Banner" /> : null}</a>

                    <div className="banner-content banner-content-center">
                        <h3 className="banner-title text-white">
                            <a href={List1?.linkUrl} target="blank">
                                {List1?.desc}
                            </a>
                        </h3>
                        {/* <h4 className="banner-subtitle text-white">
                            <a href="#">16 Items</a>
                        </h4> */}
                        <a href={List1?.linkUrl} target="blank" className="btn btn-outline-white banner-link">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-4 order-lg-last">
                <div className="banner banner-display banner-link-anim">
                    <a href="#">
                        <img src={List2?.imageUrl} alt="Banner" />
                    </a>

                    <div className="banner-content banner-content-center">
                        <h3 className="banner-title text-white">
                            <a href={List2?.linkUrl} target="blank">
                                {List2?.desc}
                            </a>
                        </h3>
                        {/* <h4 className="banner-subtitle text-white">
                            <a href="#">8 Items</a>
                        </h4> */}
                        <a href={List2?.linkUrl} target="blank" className="btn btn-outline-white banner-link">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="row">
                    <div className="col-sm-6 col-lg-12">
                        <div className="banner banner-display banner-link-anim">
                            <a href="#">
                                <img src={List3?.imageUrl} alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    <a href={List3?.linkUrl} target="blank">
                                        {List3?.desc}
                                    </a>
                                </h3>
                                {/* <h4 className="banner-subtitle text-white">
                                    <a href="#">24 Items</a>
                                </h4> */}
                                <a href={List3?.linkUrl} target="blank" className="btn btn-outline-white banner-link">
                                    Discover Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-12">
                        <div className="banner banner-display banner-link-anim">
                            <a href="#">
                                <img src={List4?.imageUrl} alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white">
                                    <a href={List4?.linkUrl} target="blank">
                                        {List4?.desc}
                                    </a>
                                </h3>
                                {/* <h4 className="banner-subtitle text-white">
                                    <a href={List3.linkUrl} target="blank" >6 Items</a>
                                </h4> */}
                                <a href={List4?.linkUrl} target="blank" className="btn btn-outline-white banner-link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(BreezeDaily)
