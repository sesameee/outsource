import React, { memo } from 'react'
import { useUserPoints } from '@/hooks/UserPoints'
import { UserPointsSelectors } from '@/store'
import { useSelector } from 'react-redux'
// import { CategoryData } from '@/types/apis/channelList'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

const Points: React.FC = () => {
    useUserPoints()
    const userPoints = useSelector(UserPointsSelectors.userPoints)
    console.log('userPoints :>> ', userPoints)

    return (
        <div className="point-frame">
            <h3 className="title">我的剩餘點數</h3>
            <h1 className="points">
                <span className="main-color">{userPoints.totalPoints}</span> <b> 點 </b>
            </h1>
            <h4 className="tips">
                <span className="main-color">{userPoints.expiryPoints}</span>
                <b> 點 </b>即將於 {userPoints.expiryDate} 到期
            </h4>
        </div>
    )
}

export default memo(Points)
