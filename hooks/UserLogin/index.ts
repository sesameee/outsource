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
import { useTranslation } from '@/I18n'
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
            const isNoToken = getUser.accessToken == ''
            if (parms.accessToken != getUser.accessToken) {
                if (getUser.accessToken == '' && getUser.token == '') {
                    router.push('/')
                }
                setParms({
                    accessToken: getUser.accessToken,
                    token: getUser.token,
                })
            } else {
                if ((router.pathname.indexOf('member') != -1 || router.pathname == '/checkout') && isNoToken) {
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
        const { t } = useTranslation()
        const youAreLogin = t('youAreLogin')
        useEffect(() => {
            if (accessToken != success.accessToken && success.accessToken && success.isLogin) {
                if (router.pathname != '/') {
                    router.push('/')
                }
                setPropIsOpenFn(false)
                dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: youAreLogin }))
            }
        }, [setPropIsOpenFn, success, router, accessToken, youAreLogin])

        // 登入成功後新增購物車
        useEffect(() => {
            if (accessToken != success.accessToken && success.accessToken) {
                if (cartList.length > 0) {
                    const newList = cartList.map((item) => {
                        return {
                            cid: item.cid,
                            pid: item.pid,
                            spec1: item.spec1,
                            spec2: item.spec2,
                            qty: item.qty,
                        }
                    })
                    handleCart('add', newList, {})
                }
            }
        }, [success.accessToken, cartList, accessToken, handleCart])

        // 登入成功後新增願望清單
        useEffect(() => {
            if (accessToken != success.accessToken && success.accessToken) {
                if (wishList.length > 0) {
                    const newList = wishList.map((item: any) => {
                        return {
                            cid: item.cid,
                            pid: item.pid,
                            spec1: item.spec1,
                            spec2: item.spec2,
                            qty: item.qty,
                        }
                    })
                    handleWish('add', newList, {})
                }
            }
        }, [success.accessToken, wishList, accessToken, handleWish])
    }
    const { t } = useTranslation()
    const youAreLogout = t('youAreLogout')
    const handleLogout = useCallback(() => {
        dispatch(UserLoginActions.fetchUserLoginFailure({ error: '' }))
        dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: youAreLogout }))
    }, [dispatch, youAreLogout])
    return { handleLoginSubmit, handleLogout, UseAuthHandle, UseLoginSuccess }
}
