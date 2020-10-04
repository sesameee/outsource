import React, { memo, useEffect } from 'react'

import { ShoppingCartListSelectors, PromoCodeSelectors, UserLoginSelectors } from '@/store'
import { useSelector } from 'react-redux'
import NumberInput from '../commons/NumberInput'
import { ShoppingCartProductData } from '@/types/apis/common'
import { State as PromoCodeState } from '@/types/stores/promoCode/state'
import { accMul, currency, toThousandFilter } from '@/utils'
import { useShoppingCartModifyHandler } from '@/hooks/ShoppingCart'
import { useTranslation } from '@/I18n'

type CartItemProps = {
    sum: any[]
    setSum: any
}
const CartItemList: React.FC<CartItemProps> = ({ sum, setSum }: CartItemProps) => {
    const UserAuth = useSelector(UserLoginSelectors.getUserLoginData)
    const getShoppingCartItemList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const getShoppingCartListCookie = useSelector(ShoppingCartListSelectors.getShoppingCartListCookie)
    const [CartList, setCartList] = React.useState<any[]>([])

    useEffect(() => {
        if (UserAuth.accessToken) {
            setCartList(getShoppingCartItemList)
        } else {
            setCartList(getShoppingCartListCookie)
        }
    }, [UserAuth, getShoppingCartItemList, getShoppingCartListCookie])

    const promoCodeData = useSelector(PromoCodeSelectors.promoCode)
    return (
        <tbody>
            {CartList &&
                CartList.map((item, index) => {
                    return (
                        <ItemDetail
                            key={index}
                            detail={item}
                            promoCodeData={promoCodeData}
                            sum={sum}
                            setSum={setSum}
                            index={index}
                            name={item._name || item.mName}
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
    const { t } = useTranslation()
    const [amount, setAmount] = React.useState(detail?.qty || 0)
    const price = (detail?.price && amount && detail?.price * amount) || 0
    const isHaveDiscount = promoCodeData && promoCodeData.data.indexOf(detail.pid) != -1
    const discount = detail?.discountAmount

    const { handleCart } = useShoppingCartModifyHandler()
    const amountCB = (num: number) => {
        if (sum[index]) {
            const price = (detail?.price && num && detail?.price * num) || 0
            sum[index] = price
            if (isHaveDiscount) {
                sum[index] = accMul(price, Number(promoCodeData.discountRate))
            }
            setSum([...sum])
            handleCart(
                'edit',
                [
                    {
                        shoppingCartItemId: detail.shoppingCartItemId,
                        cid: detail.cid,
                        pid: detail.pid,
                        spec1: detail.spec1,
                        spec2: detail.spec2,
                        qty: num,
                    },
                ],
                { ...detail, qty: num },
            )
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
                        {detail?.productName || detail?.pName}
                        <p>
                            <span style={{ paddingRight: '10px' }}>{detail.spec1}</span>
                            <span>{detail.spec2}</span>
                        </p>
                    </h3>
                </div>
            </td>
            <td className="price-col">
                <p className="pc-hide">{t('commodity_price_2')}</p>
                {currency()}
                {toThousandFilter(detail?.price)}
            </td>
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
            <td className="total-col">
                <p className="pc-hide">{t('commodity_amount')}</p>
                {currency()}
                {toThousandFilter(price)}
            </td>
            <td className="total-col">
                {discount ? (
                    <div>
                        <p className="pc-hide">{t('commodity_amount')}</p>
                        {currency()}
                        {toThousandFilter(discount)}
                    </div>
                ) : null}
            </td>
            <td className="remove-col">
                <button
                    className="btn-remove"
                    onClick={() => {
                        handleCart(
                            'delete',
                            [
                                {
                                    shoppingCartItemId: detail.shoppingCartItemId,
                                },
                            ],
                            { ...detail, qty: amount },
                        )
                    }}
                >
                    <i className="icon-close"></i>
                </button>
            </td>
        </tr>
    )
}

export default memo(CartItemList)
