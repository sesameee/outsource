import React from 'react'
import { withTranslation } from '@/I18n'
import { ResetPasswordReqData } from '@/types/apis/resetPassword'
import { useForm } from 'react-hook-form'
import { useResetPasswordHandler } from '@/hooks/ResetPassword'
// import { ResetPasswordSelectors } from '@/store'
// import { useSelector } from 'react-redux'

const PasswordModify: React.FC = (): JSX.Element => {
    const { register, handleSubmit } = useForm<ResetPasswordReqData>()
    const { handleResetPasswordSubmit } = useResetPasswordHandler()
    const onSubmit = (data: any) => {
        handleResetPasswordSubmit({ ...data, type: 2 })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="member-from">
            <div className="form-group">
                <label htmlFor="phone">請輸入手機號碼 ( 接收驗證碼 )</label>
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
                <label htmlFor="pwd1">新密碼 ( 請輸入 6-12 位英數混合的密碼 )</label>
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
                <label htmlFor="pwd2">新密碼確認 ( 請輸入 6-12 位英數混合的密碼 )</label>
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
                    <span>確認修改</span>
                </button>
            </div>
        </form>
    )
}
export default withTranslation('translations')(PasswordModify)
