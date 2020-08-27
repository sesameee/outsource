import React, { useEffect } from 'react'
import { UserLoginSelectors, WishListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Wish: React.FC = () => {
    const UserAuth = useSelector(UserLoginSelectors.getUserLoginData)
    const { data } = useSelector(WishListSelectors.getWishList)
    const getShoppingCartListCookie = useSelector(WishListSelectors.getWishListCookie)
    const [WishList, setWishList] = React.useState<any[]>([])
    const count = WishList && WishList.length
    useEffect(() => {
        if (UserAuth.accessToken) {
            setWishList(data)
        } else {
            setWishList(getShoppingCartListCookie)
        }
    }, [UserAuth, data, getShoppingCartListCookie, WishList])
    return (
        <>
            <Link href={UserAuth.accessToken ? '/member/wishlist' : '/wishlist'}>
                <a className="wishlist-link">
                    <i className="icon-heart-o"></i>
                    {count > 0 && <span className="wishlist-count">{count}</span>}
                </a>
            </Link>
        </>
    )
}

export default Wish
