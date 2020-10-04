import React from 'react'
import { HandleAddress, useAddressInfo } from '@/hooks/AddressInfo'
import { useForm } from 'react-hook-form'
import { UserRegisterReqData } from '@/types/apis/userRegister'
import { useTranslation } from '@/I18n'
import { useUserRegisterHandler } from '@/hooks/UserRegister'
import { VerifyCodeData, VerifyCodeReqData } from '@/types/apis/verifyCode'
import { RegisterUserInfoReqData } from '@/types/apis/registerUserInfo'
import { useUserRegisterSetupHandler } from '@/hooks/UserSetup'
import { useVerifyCodeHandler } from '@/hooks/VerifyCode'
import { useResendVerifyCodeHandler } from '@/hooks/ResendVerifyCode'
import MyModal from '../MyModal'

type RegisterProps = {
    setPropIsOpenFn: any
}
type RegisterFromProps = {
    setStep: any
    setPropIsOpenFn?: any
}
const FromFirstStep: React.FC<RegisterFromProps> = ({ setStep }: RegisterFromProps) => {
    const { t, i18n } = useTranslation()
    const { register, handleSubmit } = useForm<UserRegisterReqData>()
    const { handleRegiterSubmit, HandleUserRegisterRes } = useUserRegisterHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSubmit(data)
    }
    HandleUserRegisterRes(setStep)
    const [IsOpenMemberHtml, setIsOpenMemberHtml] = React.useState(false)
    const getHtml = () => {
        return `/html/member_${i18n.language}.html`
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">{t('name')} *</label>
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
            <input
                type="text"
                ref={register}
                className="form-control"
                id="isTaiwan"
                name="isTaiwan"
                value={1}
                style={{ display: 'none' }}
            />
            <div className="form-group">
                <label htmlFor="email">{t('email_must')}</label>
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
                <label htmlFor="pwd1">{t('password_and_rule_must')}</label>
                <input
                    ref={register({
                        required: true,
                        maxLength: 12,
                        minLength: 6,
                        pattern: /^([a-zA-Z]+\d+|\d+[a-zA-Z]+)[a-zA-Z0-9]*$/,
                    })}
                    type="password"
                    className="form-control"
                    id="pwd1"
                    name="pwd1"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="pwd2">{t('confirm_password_and_rule_must')}</label>
                <input
                    ref={register({
                        required: true,
                        maxLength: 12,
                        minLength: 6,
                        pattern: /^([a-zA-Z]+\d+|\d+[a-zA-Z]+)[a-zA-Z0-9]*$/,
                    })}
                    type="password"
                    className="form-control"
                    id="pwd2"
                    name="pwd2"
                    required
                />
            </div>
            <MyModal
                content={
                    <iframe
                        style={{ width: '80vw', height: '80vh', padding: '3rem', border: 'none' }}
                        src={getHtml()}
                    ></iframe>
                }
                isOpen={IsOpenMemberHtml}
                setPropIsOpenFn={setIsOpenMemberHtml}
            />
            <div className="form-footer">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="register-policy" required />
                    <label className="custom-control-label" htmlFor="register-policy">
                        {t('read_and_agree')}
                        <a href="#" onClick={() => setIsOpenMemberHtml(true)}>
                            {t('membership_terms')}
                        </a>
                    </label>
                </div>

                <button type="submit" className="btn btn-outline-primary-2 btn-block">
                    <span>{t('next_step')}</span>
                </button>
            </div>
        </form>
    )
}

const FromSecondStep: React.FC<RegisterFromProps> = ({ setStep }: RegisterFromProps) => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<VerifyCodeData>()
    const { HandleVerifyCodeRes, handleVerifyCodeSubmit } = useVerifyCodeHandler()
    const { handleResendVerifyCodeSubmit } = useResendVerifyCodeHandler()

    const onSubmit = (data: VerifyCodeReqData) => {
        data.isLogin = false
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

const FromThirdStep: React.FC<RegisterFromProps> = ({ setPropIsOpenFn }: RegisterFromProps) => {
    useAddressInfo()
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<RegisterUserInfoReqData>()
    const { AddressInfo, city, setCity, areas } = HandleAddress()
    const { handleRegiterSetupSubmit, HandleUserRegisterSetupRes } = useUserRegisterSetupHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSetupSubmit(data)
    }
    HandleUserRegisterSetupRes(setPropIsOpenFn)
    return (
        <form className="from-third-step" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label className="label" htmlFor="sex">
                    {t('gender')}
                </label>
                <select ref={register} className="form-control" id="sex" name="sex">
                    <option value="m" defaultChecked={true}>
                        {t('man')}
                    </option>
                    <option value="f">{t('woman')}</option>
                </select>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="address">
                    {t('address')} *
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
                                value={city}
                            >
                                <option value="" selected={true}>
                                    {t('please_select_county')}
                                </option>
                                {AddressInfo.map((item: any, index: number) => {
                                    return (
                                        <option key={index} value={item.cityCode}>
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
                                defaultValue=""
                            >
                                <option value="" selected={true}>
                                    {t('please_select_zone')}
                                </option>
                                {areas.map((item: any, index: number) => {
                                    return (
                                        <option key={`a${index}`} value={item.areaCode}>
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
                <label>{t('input_full_info_hint')}</label>
                <button type="submit" className="btn btn-outline-primary-2 btn-block margin-top-more">
                    <span>{t('done')}</span>
                </button>
                <a onClick={() => setPropIsOpenFn(false)}>{t('skip_and_finish_register')}</a>
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
