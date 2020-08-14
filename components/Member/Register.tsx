import React from 'react'
import { useSelector } from 'react-redux'
import { useAddressInfo } from '@/hooks/AddressInfo'
import { AddressInfoSelectors } from '@/store'
import { useForm } from 'react-hook-form'
import { UserRegisterReqData } from '@/types/apis/userRegister'
import { useTranslation } from '@/I18n'
import { useUserRegisterHandler } from '@/hooks/UserRegister'
import { VerifyCodeData } from '@/types/apis/verifyCode'
import { RegisterUserInfoReqData } from '@/types/apis/registerUserInfo'
import { useUserRegisterSetupHandler } from '@/hooks/UserSetup'

type RegisterProps = {
    setPropIsOpenFn: any
}
type RegisterFromProps = {
    setStep: any
    setPropIsOpenFn?: any
}
const FromFirstStep: React.FC<RegisterFromProps> = ({ setStep }: RegisterFromProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserRegisterReqData>()
    const { handleRegiterSubmit, HandleUserRegisterRes } = useUserRegisterHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSubmit(data)
    }
    HandleUserRegisterRes(setStep)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                    ref={register({ required: true })}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                />
            </div>

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
                <label htmlFor="email">電子郵件* ( 訂單發送位置 )</label>
                <input
                    ref={register({ required: true })}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="pwd1">密碼* ( 請輸入 6-12 位英數混合的密碼 )</label>
                <input
                    ref={register({ required: true })}
                    type="password"
                    className="form-control"
                    id="pwd1"
                    name="pwd1"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="pwd2">確認密碼* ( 請輸入 6-12 位英數混合的密碼 )</label>
                <input
                    ref={register({ required: true })}
                    type="password"
                    className="form-control"
                    id="pwd2"
                    name="pwd2"
                    required
                />
            </div>

            <div className="form-footer">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="register-policy" required />
                    <label className="custom-control-label" htmlFor="register-policy">
                        我已詳閱並同意<a href="#">會員條款</a>
                    </label>
                </div>

                <button type="submit" className="btn btn-outline-primary-2 btn-block">
                    <span>下一步</span>
                </button>
            </div>
        </form>
    )
}

const FromSecondStep: React.FC<RegisterFromProps> = ({ setStep }: RegisterFromProps) => {
    const { register, handleSubmit } = useForm<VerifyCodeData>()
    const { handleRegiterSetupSubmit } = useUserRegisterSetupHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSetupSubmit(data)
        setStep(3)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="code">簡訊驗證碼 *</label>
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
                    若 30 秒內未收到啟用碼 <a onClick={handleSubmit(onSubmit)}>重傳啟用碼</a>
                </label>
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>送出</span>
                </button>
            </div>
        </form>
    )
}

const FromThirdStep: React.FC<RegisterFromProps> = ({ setPropIsOpenFn }: RegisterFromProps) => {
    useAddressInfo()
    //const { t } = useTranslation()
    const { register, handleSubmit } = useForm<RegisterUserInfoReqData>()
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [city, setCity] = React.useState(0)
    const { handleRegiterSetupSubmit, HandleUserRegisterSetupRes } = useUserRegisterSetupHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSetupSubmit(data)
    }
    HandleUserRegisterSetupRes(setPropIsOpenFn)
    return (
        <form className="from-third-step" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="rocId">身份證字號 *</label>
                <input
                    type="text"
                    ref={register({ required: true })}
                    className="form-control"
                    id="rocId"
                    name="rocId"
                    required
                />
            </div>
            <div className="form-group">
                <label className="label" htmlFor="sex">
                    性別
                </label>
                <select ref={register} className="form-control" id="sex" name="sex">
                    <option value="m" defaultChecked={true}>
                        男
                    </option>
                    <option value="f">女</option>
                </select>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="address">
                    地址 *
                </label>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="select-custom">
                            <select
                                ref={register({ required: true })}
                                name="cityCode"
                                id="cityCode"
                                className="form-control"
                                onChange={(e) => setCity(Number(e.target.value))}
                            >
                                <option value="" selected={true}>
                                    請選擇縣市
                                </option>
                                {AddressInfo.map((item, index) => {
                                    return (
                                        <option key={index} value={index}>
                                            {item.cityName}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="select-custom">
                            <select
                                ref={register({ required: true })}
                                name="areaCode"
                                id="areaCode"
                                className="form-control"
                            >
                                <option value="" selected={true}>
                                    請選擇區域
                                </option>
                                {AddressInfo[city] &&
                                    AddressInfo[city].areas.map((item, index) => {
                                        return (
                                            <option key={`a${index}`} value={item.zipCode}>
                                                {item.areaName}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <input
                    ref={register({ required: true })}
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    required
                />
            </div>
            <div className="form-footer">
                <label>小提醒～此頁資訊如未填寫完整，可能會影響您的權益喔</label>
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>完成</span>
                </button>
                <a onClick={() => setPropIsOpenFn(false)}>略過並完成註冊</a>
            </div>
        </form>
    )
}

const Register: React.FC<RegisterProps> = ({ setPropIsOpenFn }: RegisterProps) => {
    const [step, setStep] = React.useState(1)
    switch (step) {
        case 1:
            return <FromFirstStep setStep={setStep} />

        case 2:
            return <FromSecondStep setStep={setStep} />

        case 3:
            return <FromThirdStep setStep={setStep} setPropIsOpenFn={setPropIsOpenFn} />

        default:
            return <FromFirstStep setStep={setStep} />
    }
}

export default Register
