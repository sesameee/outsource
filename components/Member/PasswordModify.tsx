import React from 'react'
import { withTranslation } from '@/I18n'
import { ResetPasswordReqData } from '@/types/apis/resetPassword'
import { useForm } from 'react-hook-form'
import { useResetPasswordHandler } from '@/hooks/ResetPassword'
import { useTranslation } from '@/I18n'
import { VerifyCodeData } from '@/types/apis/verifyCode'
import { useVerifyCodeHandler } from '@/hooks/VerifyCode'
import { useResendVerifyCodeHandler } from '@/hooks/ResendVerifyCode'
import { UserRegisterReqData } from '@/types/apis/userRegister'
// import { ResetPasswordSelectors } from '@/store'
// import { useSelector } from 'react-redux'

type PasswordModifyFromProps = {
    setStep: any
}

const FromFirstStep: React.FC<PasswordModifyFromProps> = ({ setStep }: PasswordModifyFromProps): JSX.Element => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<ResetPasswordReqData>()
    const { handleResendVerifyCodeSubmit, HandleResendVerifyCodeRes } = useResendVerifyCodeHandler()
    const onSubmit = (data: any) => {
        handleResendVerifyCodeSubmit({ ...data, action: 'reset' })
    }
    HandleResendVerifyCodeRes(setStep)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="member-from" name="ResetPassword">
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
                    <label className="label" htmlFor="phone">
                        {' '}
                    </label>
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
                <label htmlFor="taiwanId">{t('id_number')} *</label>
                <input
                    type="text"
                    ref={register({ required: true })}
                    className="form-control"
                    id="taiwanId"
                    name="taiwanId"
                    required
                />
            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2">
                    <span>{t('next_step')}</span>
                </button>
            </div>
        </form>
    )
}

const FromSecondStep: React.FC<PasswordModifyFromProps> = ({ setStep }: PasswordModifyFromProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<VerifyCodeData>()
    const { HandleVerifyCodeRes, handleVerifyCodeSubmit } = useVerifyCodeHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleVerifyCodeSubmit(data)
    }
    HandleVerifyCodeRes(setStep)
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
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>{t('submit')}</span>
                </button>
            </div>
        </form>
    )
}

const FromThirdStep: React.FC<PasswordModifyFromProps> = ({ setStep }: PasswordModifyFromProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<ResetPasswordReqData>()
    const { handleResetPasswordSubmit } = useResetPasswordHandler()
    const onSubmit = (data: any) => {
        handleResetPasswordSubmit({ ...data, type: 2 })
    }
    console.log('setStep :>> ', setStep)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="pwd1">{t('new_password_and_rule')}</label>
                <input
                    type="password"
                    className="form-control"
                    id="pwd1"
                    name="pwd1"
                    ref={register({ required: true })}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="pwd2">{t('confirm_password_and_rule')}</label>
                <input
                    type="password"
                    className="form-control"
                    id="pwd2"
                    name="pwd2"
                    ref={register({ required: true })}
                    required
                />
            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2">
                    <span>{t('confirm_modify')}</span>
                </button>
            </div>
        </form>
    )
}

const PasswordModify: React.FC = (): JSX.Element => {
    const [step, setStep] = React.useState(1)
    switch (step) {
        case 1:
            return <FromFirstStep setStep={setStep} />

        case 2:
            return <FromSecondStep setStep={setStep} />

        case 3:
            return <FromThirdStep setStep={setStep} />

        default:
            return <FromFirstStep setStep={setStep} />
    }
}
export default withTranslation('translations')(PasswordModify)
