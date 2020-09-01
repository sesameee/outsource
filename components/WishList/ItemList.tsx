import React, { memo, useEffect } from 'react'
import { WishListSelectors, UserLoginSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
import { useShoppingCartModifyHandler } from '@/hooks/ShoppingCart'
import { useWishModifyHandler } from '@/hooks/Wish'
import Link from 'next/link'

const WishList: React.FC = () => {
    const { t } = useTranslation()
    const { handleCart } = useShoppingCartModifyHandler()
    const { handleWish } = useWishModifyHandler()
    const UserAuth = useSelector(UserLoginSelectors.getUserLoginData)
    const { data } = useSelector(WishListSelectors.getWishList)
    const getListCookie = useSelector(WishListSelectors.getWishListCookie)
    const [WishList, setWishList] = React.useState<any[]>([])
    useEffect(() => {
        if (UserAuth.accessToken) {
            setWishList(data)
        } else {
            setWishList(getListCookie)
        }
    }, [UserAuth, data, getListCookie, WishList])
    return (
        <tbody>
            {WishList &&
                WishList.map((item: any, index: number) => (
                    <tr key={index}>
                        <td className="product-col">
                            <div className="product">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src={item.imageUrl} alt="Product image" />
                                    </a>
                                </figure>

                                <h3 className="product-title">
                                    <Link href={`/product/${item.cid}/${item.pid}`} prefetch={false}>
                                        <a href="#">{item.pName}</a>
                                    </Link>
                                </h3>
                            </div>
                        </td>
                        <td className="price-col">${item.price}</td>
                        <td className="action-col">
                            <Link href={`/product/${item.cid}/${item.pid}`} prefetch={false}>
                                <button className="btn btn-block btn-outline-primary-2">
                                    <i className="icon-cart-plus"></i>
                                    {t('add_to_cart')}
                                </button>
                            </Link>
                        </td>
                        <td className="remove-col">
                            <button
                                className="btn-remove"
                                onClick={() => {
                                    handleWish(
                                        'delete',
                                        [
                                            {
                                                shoppingWishItemId: item.shoppingWishItemId,
                                                cid: item.cid,
                                                pid: item.pid,
                                                spec1: '',
                                                spec2: '',
                                                qty: 1,
                                            },
                                        ],
                                        index,
                                    )
                                }}
                            >
                                <i className="icon-close"></i>
                            </button>
                        </td>
                    </tr>
                ))}
        </tbody>
    )
}

export default memo(WishList)
