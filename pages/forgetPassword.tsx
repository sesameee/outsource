import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { useTranslation } from '@/I18n'
//import { useRouter } from 'next/router'
//import { NextPageContext, NextPage } from 'next'
// import { VerifyCodeData } from '@/types/apis/verifyCode'
// import { ForgotPasswordReqData } from '@/types/apis/forgotPassword'
// import { useForm } from 'react-hook-form'

const FromFirstStep: React.FC = () => {
    //const { t } = useTranslation()
    //const { register, handleSubmit } = useForm<ForgotPasswordReqData>()

    return (
        <form action="#">
            <div className="form-group">
                <label htmlFor="phone">請輸入手機號碼 ( 接收驗證碼 ) *</label>
                <input type="tel" className="form-control" id="phone" name="phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="rocId">請輸入身份證字號 *</label>
                <input type="tel" className="form-control" id="rocId" name="rocId" required />
            </div>
            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>確認</span>
                </button>
            </div>
        </form>
    )
}

const FromSecondStep: React.FC = () => {
    //const { t } = useTranslation()
    //const { register, handleSubmit } = useForm<VerifyCodeData>()

    return (
        <form action="#">
            <div className="form-group">
                <label htmlFor="code">請輸入手機驗證碼 *</label>
                <input type="text" className="form-control" id="code" name="code" required />
            </div>
            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>確認</span>
                </button>
            </div>
        </form>
    )
}

const FromFrame: React.FC = () => {
    const [step, setStep] = React.useState(1)
    console.log('setStep :>> ', setStep)
    switch (step) {
        case 1:
            return <FromFirstStep />

        case 2:
            return <FromSecondStep />

        default:
            return <FromFirstStep />
    }
}

const ForgetPassword: React.FC = (): JSX.Element => {
    const { t } = useTranslation()
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: '忘記密碼',
            link: '',
        },
    ]
    return (
        <div className="page-wrapper">
            <Header isIndex={false} token={''} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            忘記密碼<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />
                <div className="container">
                    <div className="password-from">
                        <FromFrame />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ForgetPassword
