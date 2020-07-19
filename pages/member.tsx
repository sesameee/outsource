import React from 'react'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
// import { withTranslation, i18n } from '@/I18n'
type MemberProps = {
    t: TFunction
}
const Member: React.FC<MemberProps> = ({ t }: MemberProps): JSX.Element => {
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
                            Shopping Cart<span>Shop</span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
                <div className="container">
                    <div className="member-frame">
                        <ul className="frame-left">
                            <li className="li">會員資料維護</li>
                            <li className="li">訂單記錄</li>
                            <li className="li">訂單記錄</li>
                            <li className="li active">密碼修改</li>
                        </ul>
                        <div className="frame-right">
                            <form action="#" className="member-from">
                                <div className="form-group">
                                    <label htmlFor="register-email">請輸入手機號碼 ( 接收驗證碼 )</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="register-email"
                                        name="register-email"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="register-password">新密碼 ( 請輸入 6-12 位英數混合的密碼 )</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="register-password"
                                        name="register-password"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="register-password">
                                        新密碼確認 ( 請輸入 6-12 位英數混合的密碼 )
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="register-password"
                                        name="register-password"
                                        required
                                    />
                                </div>

                                <div className="form-footer">
                                    <button type="submit" className="btn btn-outline-primary-2">
                                        <span>確認修改</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
