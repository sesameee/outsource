import React, { memo } from 'react'
import { useAddressInfo } from '@/hooks/AddressInfo'
import { ErrorAlertActions, AddressInfoSelectors } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
import { useForm } from 'react-hook-form'

const UserInfo: React.FC = () => {
    useAddressInfo()
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<UserRegisterReqData>()
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [city, setCity] = React.useState(0)
    return (
        <form action="#" className="member-from" onSubmit={() => a}>
            <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input type="text" className="form-control" id="name" name="name" required />
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
                    性別
                </label>
                <select className="form-control" id="sex" name="sex">
                    <option value="m" defaultChecked={true}>
                        男
                    </option>
                    <option value="f">女</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rocId">身份證字號 *</label>
                <input type="text" className="form-control" id="rocId" name="rocId" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">電子郵件 *</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="form-group">
                <label className="label" htmlFor="address">
                    地址 *
                </label>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="select-custom">
                            <select
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
                            <select name="areaCode" id="areaCode" className="form-control">
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
                <input type="text" className="form-control" id="address" name="address" required />
            </div>

            <div className="form-footer">
                <label className="custom-control-label" htmlFor="register-policy">
                    請填寫完整資料，確保您能完整接收活動通知與優惠資訊
                </label>

                <button type="submit" className="btn btn-outline-primary-2 btn-block">
                    <span>下一步</span>
                </button>
            </div>
        </form>
    )
}

export default memo(UserInfo)
