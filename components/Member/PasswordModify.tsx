import React from 'react'
import { withTranslation } from '@/I18n'
import { ResetPasswordReqData } from '@/types/apis/resetPassword'
import { useForm } from 'react-hook-form'
import { useResetPasswordHandler } from '@/hooks/ResetPassword'
import { useTranslation } from '@/I18n'
// import { ResetPasswordSelectors } from '@/store'
// import { useSelector } from 'react-redux'

const PasswordModify: React.FC = (): JSX.Element => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<ResetPasswordReqData>()
    const { handleResetPasswordSubmit } = useResetPasswordHandler()
    const onSubmit = (data: any) => {
        handleResetPasswordSubmit({ ...data, type: 2 })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="member-from" name="ResetPassword">
            <div className="form-group">
                <label htmlFor="phone">{t('please_input_phone_number_and_receive_captcha')}</label>
                <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    ref={register({ required: true })}
                    required
                />
            </div>

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
                {/* <a href="/forgetPassword" className="forgot-link">
                    {t('forget_password')}
                </a> */}
                <button type="submit" className="btn btn-outline-primary-2">
                    <span>{t('confirm_modify')}</span>
                </button>
            </div>
        </form>
    )
}
export default withTranslation('translations')(PasswordModify)
