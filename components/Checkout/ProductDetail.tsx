import React from 'react'
// import { useShoppingCartList } from '@/hooks/ShoppingCart'
// import { ShoppingCartListSelectors } from '@/store'
// import { useSelector } from 'react-redux'
// import Link from 'next/link'
// type CartProps = {
//     setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
// }
const ProductDetail: React.FC = () => {
    // const CartList = useSelector(ShoppingCartListSelectors.getShoppingCartList)
    return (
        <table className="table table-summary">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <a href="#">Beige knitted elastic runner shoes</a>
                    </td>
                    <td>$84.00</td>
                </tr>

                <tr>
                    <td>
                        <a href="#">Blue utility pinafore denimdress</a>
                    </td>
                    <td>$76,00</td>
                </tr>
                <tr className="summary-subtotal">
                    <td>Subtotal:</td>
                    <td>$160.00</td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td>Free shipping</td>
                </tr>
                <tr className="summary-total">
                    <td>Total:</td>
                    <td>$160.00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductDetail
