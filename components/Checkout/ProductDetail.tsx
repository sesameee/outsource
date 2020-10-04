import React from 'react'
import { ShoppingCartListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
import { currency, toThousandFilter } from '@/utils'
import { HandleGetAmount } from '@/hooks/ShoppingCart'
// import Link from 'next/link'
// type CartProps = {
//     setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
// }
const ProductDetail: React.FC = () => {
    const { t } = useTranslation()
    const CartList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const { finalAmount } = HandleGetAmount()
    return (
        <table className="table table-summary">
            <thead>
                <tr>
                    <th>{t('commodity_name')}</th>
                    <th>{t('price')}</th>
                </tr>
            </thead>

            <tbody>
                {CartList.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <a href="#">{item._name}</a>
                                <p>{item.productName}</p>
                                <p>{item.spec1}</p>
                                <p>{item.spec2}</p>
                            </td>
                            <td>
                                {currency()}
                                {item.discountAmount
                                    ? toThousandFilter(item.discountAmount)
                                    : toThousandFilter(item.price)}
                            </td>
                        </tr>
                    )
                })}
                <tr className="summary-subtotal">
                    <td>{t('commodity_amount')}:</td>
                    <td>
                        {currency()}
                        {toThousandFilter(finalAmount)}
                    </td>
                </tr>
                <tr className="summary-subtotal">
                    <td>{t('shipping_price')}</td>
                    <td>{currency()}0</td>
                </tr>
                <tr>
                    <td>{t('delivery_type')}</td>
                    <td>{t('home_delivery')}</td>
                </tr>
                <tr className="summary-total">
                    <td>{t('checkout_price')}</td>
                    <td>
                        {currency()}
                        {toThousandFilter(finalAmount)}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductDetail
