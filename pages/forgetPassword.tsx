import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { useTranslation } from '@/I18n'
import { useForgotPassword } from '@/hooks/ForgotPassword'
import { useForm } from 'react-hook-form'
import { ForgotPasswordReqData } from '@/types/apis/forgotPassword'
import { VerifyCodeData } from '@/types/apis/verifyCode'
import { useVerifyCodeHandler } from '@/hooks/VerifyCode'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'

type FromFirstStepProps = {
    setStep: any
}

const FromFirstStep: React.FC<FromFirstStepProps> = ({ setStep }: FromFirstStepProps) => {
    const { t } = useTranslation()
    const { handleForgotPasswordSubmit, HandleForgotPasswordRes } = useForgotPassword()
    const { register, handleSubmit } = useForm<ForgotPasswordReqData>()
    const onSubmit = (data: any) => {
        handleForgotPasswordSubmit({ ...data, type: 2 })
    }
    HandleForgotPasswordRes(setStep)
    useBackBtnDetect()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="phone">{t('please_input_phone_number_and_receive_captcha')} *</label>
                <input
                    ref={register({ required: true })}
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="rocId">{t('please_input_id_number')} *</label>
                <input
                    ref={register({ required: true })}
                    type="text"
                    className="form-control"
                    id="rocId"
                    name="rocId"
                    required
                />
            </div>
            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>{t('confirm')}</span>
                </button>
            </div>
        </form>
    )
}

const FromSecondStep: React.FC = () => {
    const { t } = useTranslation()
    const { handleVerifyCodeSubmit } = useVerifyCodeHandler()
    const { register, handleSubmit } = useForm<VerifyCodeData>()
    const onSubmit = (data: any) => {
        handleVerifyCodeSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="code">{t('please_input_phone_captcha')} *</label>
                <input
                    ref={register({ required: true })}
                    type="text"
                    className="form-control"
                    id="code"
                    name="code"
                    required
                />
            </div>
            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>{t('confirm')}</span>
                </button>
            </div>
        </form>
    )
}

const FromFrame: React.FC = () => {
    const [step, setStep] = React.useState(1)
    switch (step) {
        case 1:
            return <FromFirstStep setStep={setStep} />

        case 2:
            return <FromSecondStep />

        default:
            return <FromFirstStep setStep={setStep} />
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
            title: t('forget_password_text_only'),
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
                            {t('forget_password_text_only')}
                            <span></span>
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
