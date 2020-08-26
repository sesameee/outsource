import React from 'react'
import { ShoppingCartListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
// import Link from 'next/link'
// type CartProps = {
//     setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
// }
const ProductDetail: React.FC = () => {
    const { t } = useTranslation()
    const CartList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    let total = 0
    return (
        <table className="table table-summary">
            <thead>
                <tr>
                    <th>{t('commodity_name')}}</th>
                    <th>{t('price')}</th>
                </tr>
            </thead>

            <tbody>
                {CartList.map((item, index) => {
                    total = total + Number(item.qty) * Number(item.price)
                    return (
                        <tr key={index}>
                            <td>
                                <a href="#">{item._name}</a>
                                <p>{item.productName}</p>
                                <p>{item.spec1}</p>
                                <p>{item.spec2}</p>
                            </td>
                            <td>${item.price}</td>
                        </tr>
                    )
                })}
                <tr className="summary-subtotal">
                    <td>{t('commodity_amount')}:</td>
                    <td>${total}</td>
                </tr>
                <tr className="summary-subtotal">
                    <td>{t('shipping_price')}</td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>{t('delivery_type')}</td>
                    <td>{t('home_delivery')}</td>
                </tr>
                <tr className="summary-total">
                    <td>{t('checkout_price')}</td>
                    <td>${total}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductDetail
