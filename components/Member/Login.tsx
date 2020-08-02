import React, { useEffect } from 'react'
import { useTranslation } from '@/I18n'
import { useForm } from 'react-hook-form'
import { UserLoginReqData } from '@/types/apis/userLogin'
import { useUserLoginHandler } from '@/hooks/UserLogin'
import ErrorAlert from '../commons/ErrorAlert'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorAlertActions, UserLoginSelectors } from '@/store'

type LoginProps = {
    setPropIsOpenFn: any
}

const Login: React.FC<LoginProps> = ({ setPropIsOpenFn }: LoginProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserLoginReqData>()
    const { handleLoginSubmit } = useUserLoginHandler()
    const error = useSelector(UserLoginSelectors.getUserLoginError)
    const success = useSelector(UserLoginSelectors.getUserLoginData)
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            dispatch(
                ErrorAlertActions.toggleErrorAlert({
                    isOpen: true,
                    error: error,
                }),
            )
        }
    }, [dispatch, error])

    useEffect(() => {
        if (success.memberId) {
            setPropIsOpenFn(false)
        }
    }, [setPropIsOpenFn, success.memberId])

    const onSubmit = (data: UserLoginReqData) => {
        handleLoginSubmit(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <ErrorAlert />
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

                <a href="#" className="forgot-link">
                    {t('forget_password')}
                </a>
            </div>
        </form>
    )
}

export default Login
