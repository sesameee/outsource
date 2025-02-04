import React from 'react'

import Header from '@/components/Header'
// import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { useTranslation } from '@/I18n'
import MemberRoute from '@/components/Member/MemberRoute'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import PasswordModify from '@/components/Member/PasswordModify'
import Points from '@/components/Member/Points'
import Order from '@/components/Member/Order'
import WishList from '@/components/Member/WishList'
import UserInfo from '@/components/Member/UserInfo'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'

type SidePageFromProps = {
    pageName: string
}

const SidePageFrom: React.FC<SidePageFromProps> = ({ pageName }: SidePageFromProps) => {
    switch (pageName) {
        case 'points':
            return <Points />

        case 'order':
            return <Order />

        case 'wishList':
            return <WishList />

        case 'userInfo':
            return <UserInfo />

        case 'passwordModify':
            return <PasswordModify />

        default:
            return <PasswordModify />
    }
}

const Member: NextPage<any> = (): JSX.Element => {
    useBackBtnDetect()
    const { t } = useTranslation()
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: t('member_page'),
            link: '',
        },
    ]
    const router = useRouter()
    const pageName = (router && router.query && router.query.pageName && router.query.pageName[0]) || ''

    const displayName = (pageName: string) => {
        switch (pageName) {
            case 'points':
                return t('member_point')

            case 'order':
                return t('online_order_record')

            case 'wishList':
                return t('wish_list')

            case 'userInfo':
                return t('member_data_maintain')

            case 'passwordModify':
                return t('modify_password')

            default:
                return t('member_point')
        }
    }

    return (
        <div className="page-wrapper">
            <Header isIndex={false} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            {displayName(pageName)}
                            <span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
                <div className="container">
                    <div className="member-frame">
                        <MemberRoute />
                        <div className="frame-right">
                            <SidePageFrom pageName={pageName} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Member
