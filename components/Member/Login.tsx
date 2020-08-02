import React from 'react'
import { useTranslation } from '@/I18n'
import { FilterType } from '@/types/Common'
const Login: React.FC = () => {
    const { t } = useTranslation()
    return (
        <form action="#" className="login-form">
            <div className="desc">{t('login_desc_01')}</div>
            <div className="phone-frame">
                <div className="form-group phoneCode">
                    <label className="label" htmlFor="singin-phoneCode">
                        {t('cellphone_number')} *
                    </label>
                    <select className="form-control" id="singin-phoneCode" name="singin-phoneCode">
                        <option value={886} defaultChecked={true}>
                            TW +886
                        </option>
                    </select>
                </div>
                <div className="form-group phone">
                    <label className="label" htmlFor="singin-phone"></label>
                    <input type="number" className="form-control" id="singin-phone" name="singin-phone" required />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="singin-password">{t('member_password')} *</label>
                <input type="password" className="form-control" id="singin-password" name="singin-password" required />
            </div>

            <div className="form-footer">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="signin-remember" />
                    <label className="custom-control-label" htmlFor="signin-remember">
                        Remember Me
                    </label>
                </div>

                <button type="submit" className="btn btn-outline-primary-2">
                    <span>{t('member_password')}</span>
                    <i className="icon-long-arrow-right"></i>
                </button>

                <a href="#" className="forgot-link">
                    Forgot Your Password?
                </a>
            </div>
        </form>
    )
}

export default Login
