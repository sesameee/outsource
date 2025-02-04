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
                <Link href="/member/points" prefetch={false}>
                    {t('member_point')}
                </Link>
            </li>
            <li className={`li ${pageName === 'order' ? 'active' : ''}`}>
                <Link href="/member/order" prefetch={false}>
                    {t('online_order_record')}
                </Link>
            </li>
            <li className={`li ${pageName === 'wishList' ? 'active' : ''}`}>
                <Link href="/member/wishList" prefetch={false}>
                    {t('wish_list')}
                </Link>
            </li>
            <li className={`li ${pageName === 'userInfo' ? 'active' : ''}`}>
                <Link href="/member/userInfo" prefetch={false}>
                    {t('member_data_maintain')}
                </Link>
            </li>
            <li className={`li ${pageName === 'passwordModify' ? 'active' : ''}`}>
                <Link href="/member/passwordModify" prefetch={false}>
                    {t('modify_password')}
                </Link>
            </li>
            <li onClick={() => handleLogout()}>
                <a href="#"> {t('logout')}</a>
            </li>
        </ul>
    )
}

export default memo(MemberRoute)
