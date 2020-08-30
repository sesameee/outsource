import React, { memo } from 'react'
// import ItemSubList from './ItemSubList'
// import { CategoryData } from '@/types/apis/channelList'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '@/I18n'
import { useUserLoginHandler } from '@/hooks/UserLogin'

const MemberRoute: React.FC = () => {
    const { t } = useTranslation()
    const router = useRouter()
    const pageName = (router && router.query && router.query.pageName && router.query.pageName[0]) || ''
    const { handleLogout } = useUserLoginHandler()
    return (
        <ul className="frame-left">
            <li className={`li ${pageName === 'points' ? 'active' : ''}`}>
                <Link href="/member/points">{t('member_point')}</Link>
            </li>
            <li className={`li ${pageName === 'order' ? 'active' : ''}`}>
                <Link href="/member/order">{t('online_order_record')}</Link>
            </li>
            <li className={`li ${pageName === 'wishList' ? 'active' : ''}`}>
                <Link href="/member/wishList">{t('wish_list')}</Link>
            </li>
            <li className={`li ${pageName === 'userInfo' ? 'active' : ''}`}>
                <Link href="/member/userInfo">{t('member_data_maintain')}</Link>
            </li>
            <li className={`li ${pageName === 'passwordModify' ? 'active' : ''}`}>
                <Link href="/member/passwordModify">{t('modify_password')}</Link>
            </li>
            <li onClick={() => handleLogout()}>
                <a href="#">登出</a>
            </li>
        </ul>
    )
}

export default memo(MemberRoute)
