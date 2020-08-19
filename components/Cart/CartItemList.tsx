import React, { memo } from 'react'

import { ShoppingCartListSelectors, PromoCodeSelectors } from '@/store'
import { useSelector } from 'react-redux'
import NumberInput from '../commons/NumberInput'
import { ShoppingCartProductData } from '@/types/apis/common'
import { State as PromoCodeState } from '@/types/stores/promoCode/state'
import { accMul } from '@/utils'

type CartItemProps = {
    sum: any[]
    setSum: any
}
const CartItemList: React.FC<CartItemProps> = ({ sum, setSum }: CartItemProps) => {
    const shoppingCartListData = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const promoCodeData = useSelector(PromoCodeSelectors.promoCode)
    return (
        <tbody>
            {shoppingCartListData &&
                shoppingCartListData.map((item, index) => {
                    return (
                        <ItemDetail
                            key={index}
                            detail={item}
                            promoCodeData={promoCodeData}
                            sum={sum}
                            setSum={setSum}
                            index={index}
                            name={item._name}
                        />
                    )
                })}
        </tbody>
    )
}

type ItemDetailProps = {
    sum: any[]
    setSum: any
    detail: ShoppingCartProductData
    index: number
    name: string
    promoCodeData: PromoCodeState
}
const ItemDetail: React.FC<ItemDetailProps> = ({
    detail,
    index,
    name,
    sum,
    setSum,
    promoCodeData,
}: ItemDetailProps) => {
    const [amount, setAmount] = React.useState(detail?.qty || 0)
    const price = (detail?.price && amount && detail?.price * amount) || 0
    const isHaveDiscount = promoCodeData && promoCodeData.data.indexOf(detail.pid) != -1
    const discount = isHaveDiscount ? accMul(price, Number(promoCodeData.discountRate)) : 0

    const amountCB = (num: number) => {
        if (sum[index]) {
            const price = (detail?.price && num && detail?.price * num) || 0
            sum[index] = price
            if (isHaveDiscount) {
                sum[index] = accMul(price, Number(promoCodeData.discountRate))
            }
            setSum([...sum])
        }
    }
    return (
        <tr key={index}>
            <td className="product-col">
                <div className="product">
                    <figure className="product-media">
                        <a href="#">
                            <img src={detail?.imageUrl} alt="Product image" />
                        </a>
                    </figure>

                    <h3 className="product-title">
                        <p>{name}</p>
                        {detail?.productName}
                        <p>{detail.spec1}</p>
                    </h3>
                </div>
            </td>
            <td className="price-col">${detail?.price}</td>
            <td className="quantity-col">
                <div className="cart-product-quantity">
                    <NumberInput
                        amount={amount}
                        setAmount={setAmount}
                        inputName={`qty${index}`}
                        minValue={1}
                        maxValue={detail?.orderMax}
                        amountCB={amountCB}
                    />
                </div>
            </td>
            <td className="total-col">${price}</td>
            <td className="total-col">{discount ? `$${discount}` : null}</td>
            <td className="remove-col">
                <button className="btn-remove">
                    <i className="icon-close"></i>
                </button>
            </td>
        </tr>
    )
}

export default memo(CartItemList)
