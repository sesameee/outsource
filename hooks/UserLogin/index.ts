import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    UserLoginActions,
    UserLoginSelectors,
    ErrorAlertActions,
    ShoppingCartListSelectors,
    WishListSelectors,
} from '@/store'
import { UserLoginReqData } from '@/types/apis/userLogin'
import { useRouter } from 'next/router'
import { useShoppingCartModifyHandler } from '../ShoppingCart'
import { useWishModifyHandler } from '../Wish'
export const useUserLoginHandler = (): any => {
    const dispatch = useDispatch()
    const handleLoginSubmit = useCallback(
        (data: UserLoginReqData) => {
            dispatch(UserLoginActions.fetchUserLogin(data))
        },
        [dispatch],
    )

    const UseAuthHandle = (): void => {
        const router = useRouter()
        const getUser = useSelector(UserLoginSelectors.getUserLoginData)
        const [parms, setParms] = useState({
            accessToken: getUser.accessToken,
            token: getUser.token,
        })
        useEffect(() => {
            console.log('parms.accessToken :>> ', parms.accessToken)
            console.log('getUser.accessToken :>> ', getUser.accessToken)
            const isNoToken = getUser.accessToken == ''
            if (parms.accessToken != getUser.accessToken) {
                if (getUser.accessToken == '' && getUser.token == '') {
                    console.log('router.pathname :>> ', router.pathname)
                    router.push('/')
                }
                setParms({
                    accessToken: getUser.accessToken,
                    token: getUser.token,
                })
            } else {
                console.log('router.pathnameA :>> ', router.pathname)
                if (router.pathname.indexOf('member') != -1 && isNoToken) {
                    router.push('/')
                }
            }
        }, [getUser.accessToken, getUser.token, parms, router])
    }
    const UseLoginSuccess = (setPropIsOpenFn: any): void => {
        const success = useSelector(UserLoginSelectors.getUserLoginData)
        const cartList = useSelector(ShoppingCartListSelectors.getShoppingCartListCookie)
        const wishList = useSelector(WishListSelectors.getWishListCookie)
        const router = useRouter()
        const { handleCart } = useShoppingCartModifyHandler()
        const { handleWish } = useWishModifyHandler()
        const [accessToken, setAccessToken] = useState(success.accessToken)
        useEffect(() => {
            if (success.accessToken) {
                setAccessToken(success.accessToken)
            }
        }, [success.accessToken, setAccessToken])

        // 登入成功後關閉彈窗和轉址
        useEffect(() => {
            if (accessToken != success.accessToken && success.accessToken) {
                if (router.pathname != '/') {
                    router.push('/')
                }
                setPropIsOpenFn(false)
                dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已登入' }))
            }
        }, [setPropIsOpenFn, success.accessToken, router, accessToken])

        // 登入成功後新增購物車
        useEffect(() => {
            if (accessToken != success.accessToken && success.accessToken) {
                if (cartList.length > 0) {
                    handleCart('add', cartList, {})
                }
            }
        }, [success.accessToken, cartList, accessToken, handleCart])

        // 登入成功後新增願望清單
        useEffect(() => {
            if (accessToken != success.accessToken && success.accessToken) {
                if (wishList.length > 0) {
                    handleWish('add', wishList, {})
                }
            }
        }, [success.accessToken, wishList, accessToken, handleWish])
    }

    const handleLogout = useCallback(() => {
        dispatch(UserLoginActions.fetchUserLoginFailure({ error: '' }))
        dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已登出' }))
    }, [dispatch])
    return { handleLoginSubmit, handleLogout, UseAuthHandle, UseLoginSuccess }
}
