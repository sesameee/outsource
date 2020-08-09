import React from 'react'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { ShoppingCartListSelectors } from '@/store'
import { useSelector } from 'react-redux'
// import Link from 'next/link'
// type CartProps = {
//     setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
// }
const ProductDetail: React.FC = () => {
    const CartList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    let total = 0
    return (
        <table className="table table-summary">
            <thead>
                <tr>
                    <th>商品名稱</th>
                    <th>金額</th>
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
                    <td>商品總額:</td>
                    <td>${total}</td>
                </tr>
                <tr className="summary-subtotal">
                    <td>運費金額:</td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>配送方式:</td>
                    <td>一般宅配</td>
                </tr>
                <tr className="summary-total">
                    <td>結帳金額:</td>
                    <td>${total}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductDetail
