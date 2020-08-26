import React, { useEffect } from 'react'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { ShoppingCartListSelectors, UserLoginSelectors } from '@/store'
import { useSelector } from 'react-redux'
import Link from 'next/link'

type CartProps = {
    setIsOpenMember: any
}
const Cart: React.FC<CartProps> = ({ setIsOpenMember }: CartProps) => {
    useShoppingCartList()
    const UserAuth = useSelector(UserLoginSelectors.getUserLoginData)

    useEffect(() => {
        console.log('UserAuth :>> ', UserAuth.token)
    }, [UserAuth])
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    const getShoppingCartItemList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const getShoppingCartListCookie = useSelector(ShoppingCartListSelectors.getShoppingCartListCookie)
    let total = 0
    const [CartList, setCartList] = React.useState<any[]>([])
    const count = CartList && CartList.length
    useEffect(() => {
        console.log('getShoppingCartListCookie :>> ', getShoppingCartListCookie)
        if (getUser.accessToken) {
            setCartList(getShoppingCartItemList)
        } else {
            setCartList(getShoppingCartListCookie)
        }
    }, [getUser, getShoppingCartItemList, getShoppingCartListCookie, CartList])
    console.log('CartList :>> ', CartList)
    return (
        <div className="dropdown cart-dropdown">
            {UserAuth.accessToken ? (
                <Link href="/cart">
                    <a
                        className="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                    >
                        <i className="icon-shopping-cart"></i>
                        {count > 0 && <span className="cart-count">{count}</span>}
                    </a>
                </Link>
            ) : (
                <a
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    onClick={() => setIsOpenMember(true)}
                >
                    <i className="icon-shopping-cart"></i>
                    {count > 0 && <span className="cart-count">{count}</span>}
                </a>
            )}

            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                    {CartList &&
                        CartList.map((item: any, index) => {
                            total = total + Number(item.qty) * Number(item.price)
                            return (
                                <div className="product" key={index}>
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <a>{item.productName || item.pName}</a>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">{item.qty}</span>x ${item.price}
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <a className="product-image">
                                            <img src={item.imageUrl} alt="product" />
                                        </a>
                                    </figure>
                                    <a className="btn-remove" title="Remove Product">
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
                    {UserAuth.accessToken ? (
                        <Link href="/cart">
                            <a className="btn btn-primary">前往購物車</a>
                        </Link>
                    ) : (
                        <a href="#" className="btn btn-primary" onClick={() => setIsOpenMember(true)}>
                            前往購物車
                        </a>
                    )}

                    {UserAuth.accessToken ? (
                        <Link href="/checkout" prefetch={false}>
                            <a className="btn btn-outline-primary-2">
                                <span>結帳</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </Link>
                    ) : (
                        <a href="#" className="btn btn-outline-primary-2" onClick={() => setIsOpenMember(true)}>
                            <span>結帳</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
