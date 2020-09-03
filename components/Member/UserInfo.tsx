import React, { memo } from 'react'
import { useAddressInfo } from '@/hooks/AddressInfo'
import { AddressInfoSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
import { useForm } from 'react-hook-form'
import { UserRegisterReqData } from '@/types/apis/userRegister'
import { useUserRegisterSetupHandler } from '@/hooks/UserSetup'

const UserInfo: React.FC = () => {
    useAddressInfo()
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserRegisterReqData>()
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [city, setCity] = React.useState(0)
    const { handleRegiterSetupSubmit } = useUserRegisterSetupHandler()
    const onSubmit = (data: UserRegisterReqData) => {
        handleRegiterSetupSubmit(data)
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
                <label htmlFor="rocId">{t('id_number')} *</label>
                <input type="text" ref={register} className="form-control" id="rocId" name="rocId" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">{t('email')} *</label>
                <input type="email" ref={register} className="form-control" id="email" name="email" required />
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
                            >
                                <option value="" selected={true}>
                                    {t('please_select_county')}
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
                            <select ref={register} name="areaCode" id="areaCode" className="form-control">
                                <option value="" selected={true}>
                                    {t('please_select_zone')}
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
                <label className="custom-control-label" htmlFor="register-policy">
                    {t('input_full_info_hint_2')}
                </label>

                <button type="submit" className="btn btn-outline-primary-2 btn-block">
                    <span>{t('next_step')}</span>
                </button>
            </div>
        </form>
    )
}

export default memo(UserInfo)
