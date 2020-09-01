import React, { useEffect } from 'react'
import { useShoppingCartList, useShoppingCartModifyHandler } from '@/hooks/ShoppingCart'
import { ShoppingCartListSelectors, UserLoginSelectors } from '@/store'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useTranslation } from '@/I18n'

type CartProps = {
    setIsOpenMember: any
}
const Cart: React.FC<CartProps> = ({ setIsOpenMember }: CartProps) => {
    useShoppingCartList()
    const { t } = useTranslation()
    const UserAuth = useSelector(UserLoginSelectors.getUserLoginData)
    const getShoppingCartItemList = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const getShoppingCartListCookie = useSelector(ShoppingCartListSelectors.getShoppingCartListCookie)
    let total = 0
    const [CartList, setCartList] = React.useState<any[]>([])
    const count =
        CartList &&
        CartList.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.qty
        }, 0)
    const { handleCart } = useShoppingCartModifyHandler()
    useEffect(() => {
        if (UserAuth.accessToken) {
            setCartList(getShoppingCartItemList)
        } else {
            setCartList(getShoppingCartListCookie)
        }
    }, [UserAuth, getShoppingCartItemList, getShoppingCartListCookie, CartList])
    return (
        <div className="dropdown cart-dropdown">
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

            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                    {CartList &&
                        CartList.map((item: any, index) => {
                            total = total + Number(item.qty) * Number(item.price)
                            return (
                                <div className="product" key={index}>
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <Link href={`/product/${item.cid}/${item.pid}`} prefetch={false}>
                                                <a>{item.productName || item.pName}</a>
                                            </Link>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">{item.qty}</span>x ${item.price}
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <Link href={`/product/${item.cid}/${item.pid}`} prefetch={false}>
                                            <a className="product-image">
                                                <img src={item.imageUrl} alt="product" />
                                            </a>
                                        </Link>
                                    </figure>
                                    <a
                                        className="btn-remove"
                                        title="Remove Product"
                                        onClick={() => {
                                            handleCart(
                                                'delete',
                                                [
                                                    {
                                                        shoppingCartItemId: item.shoppingCartItemId,
                                                    },
                                                ],
                                                index,
                                            )
                                        }}
                                    >
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
                    <Link href="/cart">
                        <a className="btn btn-primary">{t('go_to_cart')}</a>
                    </Link>

                    {UserAuth.accessToken ? (
                        <Link href="/checkout">
                            <a className="btn btn-outline-primary-2">
                                <span>{t('checkout')}</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </Link>
                    ) : (
                        <a href="#" className="btn btn-outline-primary-2" onClick={() => setIsOpenMember(true)}>
                            <span>{t('checkout')}</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
