import React from 'react'

import Header from '@/components/Header'
// import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { useTranslation } from '@/I18n'
import MemberRoute from '@/components/Member/MemberRoute'
import { useRouter } from 'next/router'
import { NextPageContext, NextPage } from 'next'
import PasswordModify from '@/components/Member/PasswordModify'
import Points from '@/components/Member/Points'
import Order from '@/components/Member/Order'
import WishList from '@/components/Member/WishList'
import UserInfo from '@/components/Member/UserInfo'

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

const Member: NextPage = (): JSX.Element => {
    const { t } = useTranslation()
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: '會員專區',
            link: '',
        },
    ]
    const router = useRouter()
    const pageName = (router && router.query && router.query.pageName && router.query.pageName[0]) || ''

    const displayName = (pageName: string) => {
        switch (pageName) {
            case 'points':
                return '會員點數'

            case 'order':
                return '線上訂單記錄'

            case 'wishList':
                return '願望清單'

            case 'userInfo':
                return '會員資料維護'

            case 'passwordModify':
                return '密碼修改'

            default:
                return '會員點數'
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

Member.getInitialProps = async (ctx: NextPageContext) => {
    console.log('ctxAAAA :>> ', ctx.req)
    return { stars: 1 }
}

export default Member
