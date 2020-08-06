import React from 'react'
import { usePromoCodeHandler } from '@/hooks/PromoCode'
import { PromoCodeReqData } from '@/types/apis/promoCode'
import { useForm } from 'react-hook-form'
// import { ShoppingCartListSelectors } from '@/store'
// import { useSelector } from 'react-redux'
// import Link from 'next/link'
// type CartProps = {
//     setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
// }
const Cart: React.FC = () => {
    const { register, handleSubmit } = useForm<PromoCodeReqData>()
    const { handlePromoCodeSubmit } = usePromoCodeHandler()
    const onSubmit = (data: PromoCodeReqData) => {
        handlePromoCodeSubmit(data.promoCode)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                    placeholder="輸入折扣碼"
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
