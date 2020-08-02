import React from 'react'

type RegisterProps = {
    setPropIsOpenFn: any
}

const Register: React.FC<RegisterProps> = ({ setPropIsOpenFn }: RegisterProps) => {
    return (
        <form action="#">
            <div className="form-group">
                <label htmlFor="register-email">Your email address *</label>
                <input type="email" className="form-control" id="register-email" name="register-email" required />
            </div>

            <div className="form-group">
                <label htmlFor="register-password">Password *</label>
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
                    <span>SIGN UP</span>
                    <i className="icon-long-arrow-right"></i>
                </button>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="register-policy" required />
                    <label className="custom-control-label" htmlFor="register-policy">
                        I agree to the <a href="#">privacy policy</a> *
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Register
