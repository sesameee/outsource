import React from 'react'
import { usePromoCodeHandler } from '@/hooks/PromoCode'
import { PromoCodeReqData } from '@/types/apis/promoCode'
import { useForm } from 'react-hook-form'
import { useTranslation } from '@/I18n'
import { UserLoginSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { UseLoginDialog } from '@/hooks/LoginDialog'

const Cart: React.FC = () => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<PromoCodeReqData>()
    const { handlePromoCodeSubmit } = usePromoCodeHandler()
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    const { setIsOpenMember } = UseLoginDialog()
    const onSubmit = (data: PromoCodeReqData) => {
        if (getUser.accessToken) {
            handlePromoCodeSubmit(data.promoCode)
        } else {
            setIsOpenMember(true)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                    placeholder={t('input_promo_code')}
                    id="promoCode"
                    name="promoCode"
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-primary-2" type="submit">
                        <i className="icon-long-arrow-right"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Cart
