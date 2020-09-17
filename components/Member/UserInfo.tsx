import React, { memo, useEffect } from 'react'
import { useAddressInfo } from '@/hooks/AddressInfo'
import { AddressInfoSelectors, UserDataSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
import { useForm } from 'react-hook-form'
import { UserRegisterReqData } from '@/types/apis/userRegister'
import { useUserRegisterSetupHandler } from '@/hooks/UserSetup'
import { useUserInfo } from '@/hooks/UserInfo'
import { AreaData } from '@/types/apis/addressInfo'

const UserInfo: React.FC = () => {
    useAddressInfo()
    useUserInfo()
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserRegisterReqData>()
    const userInfoData = useSelector(UserDataSelectors.getUserData)
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [city, setCity] = React.useState(0)
    const [areas, setAreas] = React.useState<AreaData[]>([])
    const { handleRegiterSetupSubmit } = useUserRegisterSetupHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSetupSubmit(data)
    }
    useEffect(() => {
        if (userInfoData.address_county) {
            setCity(Number(userInfoData.address_county))
        }
    }, [userInfoData])
    useEffect(() => {
        const arr = AddressInfo.filter((item) => {
            return item.cityCode == Number(city)
        })
        if (arr && arr[0]) {
            const areasData = arr[0].areas || []
            setAreas(areasData)
        }
    }, [userInfoData, AddressInfo, city])
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
                    value={userInfoData.name}
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
                        value={userInfoData.phone}
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
                    value={userInfoData.gender}
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
                <input
                    type="text"
                    ref={register}
                    className="form-control"
                    id="taiwan_id"
                    name="taiwan_id"
                    value={userInfoData.taiwan_id}
                    required
                    readOnly
                />
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
                                {AddressInfo.map((item, index) => {
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
                                value={Number(userInfoData.address_district)}
                            >
                                {areas.map((item, index) => {
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
