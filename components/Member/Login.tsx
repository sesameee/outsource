import React, { useEffect } from 'react'
import { useTranslation } from '@/I18n'
import { useForm } from 'react-hook-form'
import { UserLoginReqData } from '@/types/apis/userLogin'
import { useUserLoginHandler } from '@/hooks/UserLogin'
import { useResendVerifyCodeHandler } from '@/hooks/ResendVerifyCode'
import { useVerifyCodeHandler } from '@/hooks/VerifyCode'
import { VerifyCodeData, VerifyCodeReqData } from '@/types/apis/verifyCode'

type LoginProps = {
    setPropIsOpenFn: any
    setStep: any
}

const FromSecondStep: React.FC<LoginProps> = ({ setStep, setPropIsOpenFn }: LoginProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<VerifyCodeData>()
    const { handleVerifyCodeSubmit } = useVerifyCodeHandler()
    const { UseLoginSuccess } = useUserLoginHandler()
    const { handleResendVerifyCodeSubmit } = useResendVerifyCodeHandler()
    const onSubmit = (data: VerifyCodeReqData) => {
        data.isLogin = true
        handleVerifyCodeSubmit(data)
    }
    UseLoginSuccess(setPropIsOpenFn, setStep)
    useEffect(() => {
        handleResendVerifyCodeSubmit()
    }, [handleResendVerifyCodeSubmit])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="code">{t('message_captcha')} *</label>
                <input
                    type="text"
                    ref={register({ required: true })}
                    className="form-control"
                    id="code"
                    name="code"
                    required
                />
            </div>
            <div className="form-footer">
                <label>
                    {t('if_not_receive_captcha_hint')}
                    <a onClick={() => handleResendVerifyCodeSubmit()}>{t('re_send_captcha')}</a>
                </label>
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>{t('submit')}</span>
                </button>
            </div>
        </form>
    )
}

const FromFirstStep: React.FC<LoginProps> = ({ setPropIsOpenFn, setStep }: LoginProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserLoginReqData>()
    const { handleLoginSubmit, UseLoginSuccess } = useUserLoginHandler()
    const onSubmit = (data: UserLoginReqData) => {
        handleLoginSubmit(data)
    }
    UseLoginSuccess(setPropIsOpenFn, setStep)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="desc">{t('login_desc_01')}</div>
            <div className="phone-frame">
                <div className="form-group phoneCode">
                    <label className="label" htmlFor="phoneCode">
                        {t('cellphone_number')} *
                    </label>
                    <select ref={register({ required: true })} className="form-control" id="phoneCode" name="phoneCode">
                        <option value={886} defaultChecked={true}>
                            TW +886
                        </option>
                    </select>
                </div>
                <div className="form-group phone">
                    <label className="label" htmlFor="phone"></label>
                    <input
                        ref={register({ required: true })}
                        type="phone"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password">{t('member_password')} *</label>
                <input
                    ref={register({ required: true })}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                />
            </div>

            <div className="form-footer">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="signin-remember" />
                    <label className="custom-control-label" htmlFor="signin-remember">
                        {t('login_remember')}
                    </label>
                </div>

                <button type="submit" className="btn btn-outline-primary-2">
                    <span>{t('login_right_now')}</span>
                </button>

                <a href="/forgetPassword" className="forgot-link">
                    {t('forget_password')}
                </a>
            </div>
        </form>
    )
}

const Login: React.FC<LoginProps> = ({ setPropIsOpenFn }: LoginProps) => {
    const [step, setStep] = React.useState(1)
    switch (step) {
        case 1:
            return <FromFirstStep setStep={setStep} setPropIsOpenFn={setPropIsOpenFn} />

        case 2:
            return <FromSecondStep setStep={setStep} setPropIsOpenFn={setPropIsOpenFn} />

        default:
            return <FromFirstStep setStep={setStep} setPropIsOpenFn={setPropIsOpenFn} />
    }
}

export default Login
