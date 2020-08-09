import React from 'react'
import { withTranslation } from '@/I18n'

const PasswordModify: React.FC = (): JSX.Element => {
    return (
        <form action="#" className="member-from">
            <div className="form-group">
                <label htmlFor="register-email">請輸入手機號碼 ( 接收驗證碼 )</label>
                <input type="email" className="form-control" id="register-email" name="register-email" required />
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
                <label htmlFor="register-password">新密碼確認 ( 請輸入 6-12 位英數混合的密碼 )</label>
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
    )
}
export default withTranslation('translations')(PasswordModify)
