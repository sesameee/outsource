import React, { memo } from 'react'
// import ItemSubList from './ItemSubList'
// import { CategoryData } from '@/types/apis/channelList'
import Link from 'next/link'
import { useRouter } from 'next/router'
const MemberRoute: React.FC = () => {
    const router = useRouter()
    const pageName = (router && router.query && router.query.pageName && router.query.pageName[0]) || ''
    return (
        <ul className="frame-left">
            <li className={`li ${pageName === 'points' ? 'active' : ''}`}>
                <Link href="/member/points">會員點數</Link>
            </li>
            <li className={`li ${pageName === 'order' ? 'active' : ''}`}>
                <Link href="/member/order">線上訂單記錄</Link>
            </li>
            <li className={`li ${pageName === 'wishList' ? 'active' : ''}`}>
                <Link href="/member/wishList">願望清單</Link>
            </li>
            <li className={`li ${pageName === 'userInfo' ? 'active' : ''}`}>
                <Link href="/member/userInfo">會員資料維護</Link>
            </li>
            <li className={`li ${pageName === 'passwordModify' ? 'active' : ''}`}>
                <Link href="/member/passwordModify">密碼修改</Link>
            </li>
        </ul>
    )
}

export default memo(MemberRoute)
