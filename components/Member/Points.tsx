import React, { memo } from 'react'
// import { CategoryData } from '@/types/apis/channelList'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
const Points: React.FC = () => {
    return (
        <div className="point-frame">
            <h3 className="title">我的剩餘點數</h3>
            <h1 className="points">
                <span className="main-color">12,000</span> <b> 點 </b>
            </h1>
            <h4 className="tips">
                <span className="main-color">320</span>
                <b> 點 </b>即將於 2020/07/31 到期
            </h4>
        </div>
    )
}

export default memo(Points)
