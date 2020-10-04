import React, { memo, useEffect } from 'react'
import { HandleAddress, useAddressInfo } from '@/hooks/AddressInfo'
import { UserDataSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
import { useForm } from 'react-hook-form'
import { UserRegisterReqData } from '@/types/apis/userRegister'
import { useUserRegisterSetupHandler } from '@/hooks/UserSetup'
import { useUserInfo } from '@/hooks/UserInfo'

const UserInfo: React.FC = () => {
    useAddressInfo()
    useUserInfo()
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserRegisterReqData>()
    const userInfoData = useSelector(UserDataSelectors.getUserData)
    const { AddressInfo, city, setCity, areas } = HandleAddress()
    const { handleRegiterSetupSubmit } = useUserRegisterSetupHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSetupSubmit(data)
    }
    useEffect(() => {
        if (userInfoData.address_county) {
            setCity(Number(userInfoData.address_county))
        }
    }, [userInfoData, setCity])

    const getCanModifyParams = (param: string) => {
        const isFind = userInfoData.canModifyParams.find((item) => item == param)
        return !!isFind
    }
    const getHideString = (str: string) => {
        return str.slice(0, str.length - 5)
    }
    const [taiwanId, setTaiwanId] = React.useState('')
    const [areaCode, setAreaCode] = React.useState(0)

    useEffect(() => {
        if (userInfoData.taiwan_id) {
            setTaiwanId(getHideString(userInfoData.taiwan_id) + '*****')
        }
        if (userInfoData.address_district) {
            setAreaCode(Number(userInfoData.address_district))
        }
    }, [userInfoData])

    const handleChange = (event: any) => {
        setTaiwanId(event.target.value)
    }

    const handleAreaCodeChange = (event: any) => {
        setAreaCode(event.target.value)
    }

    return (
        <form action="#" className="member-from" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">{t('name')} *</label>
                <input
                    type="text"
                    ref={register({ required: true })}
                    className="form-control"
                    id="name"
                    name="name"
                    defaultValue={userInfoData.name}
                    required
                    readOnly
                />
            </div>

            <div className="phone-frame">
                <div className="form-group phoneCode">
                    <label className="label" htmlFor="phoneCode">
                        {t('cellphone_number')} *
                    </label>
                    <select
                        ref={register({ required: true })}
                        className="form-control"
                        id="phoneCode"
                        name="phoneCode"
                        disabled
                    >
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
                        defaultValue={userInfoData.phone}
                        required
                        readOnly
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="sex">
                    {t('gender')}
                </label>
                <select
                    ref={register}
                    className="form-control"
                    id="sex"
                    name="sex"
                    defaultValue={userInfoData.gender}
                    disabled
                >
                    <option value="male" defaultChecked={true}>
                        {t('man')}
                    </option>
                    <option value="female">{t('woman')}</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rocId">{t('id_number')} *</label>

                {getCanModifyParams('taiwan_id') ? (
                    <input
                        type="text"
                        ref={register}
                        className="form-control"
                        id="taiwan_id"
                        name="taiwan_id"
                        value={taiwanId}
                        onChange={handleChange}
                        required
                    />
                ) : (
                    <input
                        type="text"
                        ref={register}
                        className="form-control"
                        id="taiwan_id"
                        name="taiwan_id"
                        value={taiwanId}
                        onChange={handleChange}
                        required
                        readOnly
                    />
                )}
            </div>
            <div className="form-group">
                <label htmlFor="email">{t('email')} *</label>
                <input
                    type="email"
                    ref={register}
                    className="form-control"
                    id="email"
                    name="email"
                    defaultValue={userInfoData.email}
                    required
                />
            </div>

            <div className="form-group">
                <label className="label" htmlFor="address">
                    {t('address')} *
                </label>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="select-custom">
                            <select
                                ref={register}
                                name="cityCode"
                                id="cityCode"
                                className="form-control"
                                onChange={(e) => setCity(Number(e.target.value))}
                                value={city}
                            >
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
                                ref={register}
                                name="areaCode"
                                id="areaCode"
                                className="form-control"
                                value={areaCode}
                                onChange={handleAreaCodeChange}
                            >
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
                    defaultValue={userInfoData.address_string}
                    required
                />
            </div>

            <div className="form-footer">
                <label className="custom-control-label" htmlFor="register-policy">
                    {t('input_full_info_hint_2')}
                </label>

                <button type="submit" className="btn btn-outline-primary-2 btn-block">
                    <span>{t('submit')}</span>
                </button>
            </div>
        </form>
    )
}

export default memo(UserInfo)
