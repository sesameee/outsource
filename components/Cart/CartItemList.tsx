import React, { memo } from 'react'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { ShoppingCartListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import NumberInput from '../commons/NumberInput'

const CartItemList: React.FC = () => {
    useShoppingCartList()
    const shoppingCartListData = useSelector(ShoppingCartListSelectors.getShoppingCartList)
    return (
        <tbody>
            {shoppingCartListData &&
                shoppingCartListData[0] &&
                shoppingCartListData[0].shoppingCartProducts &&
                shoppingCartListData[0].shoppingCartProducts.map((item, index) => (
                    <tr key={index}>
                        <td className="product-col">
                            <div className="product">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src={item.imageUrl} alt="Product image" />
                                    </a>
                                </figure>

                                <h3 className="product-title">
                                    <a href="#">{item.productName}</a>
                                </h3>
                            </div>
                        </td>
                        <td className="price-col">${item.price}</td>
                        <td className="quantity-col">
                            <div className="cart-product-quantity">
                                <NumberInput inputName={`qty${index}`} defaultValue={item.qty} />
                            </div>
                        </td>
                        <td className="total-col">${item.price && item.qty && item.price * item.qty}</td>
                        <td className="total-col">$84.00</td>
                        <td className="remove-col">
                            <button className="btn-remove">
                                <i className="icon-close"></i>
                            </button>
                        </td>
                    </tr>
                ))}
        </tbody>
    )
}

export default memo(CartItemList)
