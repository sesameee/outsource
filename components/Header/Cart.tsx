import React from 'react'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { ShoppingCartListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import Link from 'next/link'
// type CartProps = {
//     setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
// }
const Cart: React.FC = () => {
    useShoppingCartList()
    const CartList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    let total = 0
    return (
        <div className="dropdown cart-dropdown">
            <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
            >
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">{CartList && CartList.length}</span>
            </a>

            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                    {CartList &&
                        CartList.map((item, index) => {
                            total = total + Number(item.qty) * Number(item.price)
                            return (
                                <div className="product" key={index}>
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <a href="product.html">{item.productName}</a>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">{item.qty}</span>x ${item.price}
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <a href="product.html" className="product-image">
                                            <img src={item.imageUrl} alt="product" />
                                        </a>
                                    </figure>
                                    <a href="#" className="btn-remove" title="Remove Product">
                                        <i className="icon-close"></i>
                                    </a>
                                </div>
                            )
                        })}
                </div>
                <div className="dropdown-cart-total">
                    <span>Total</span>
                    <span className="cart-total-price">${total}</span>
                </div>
                <div className="dropdown-cart-action">
                    <Link href="/cart" prefetch={false}>
                        <a className="btn btn-primary">View Cart</a>
                    </Link>
                    <Link href="/checkout" prefetch={false}>
                        <a className="btn btn-outline-primary-2">
                            <span>Checkout</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
