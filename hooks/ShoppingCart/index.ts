import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'
import {
    ShoppingCartListActions,
    ShoppingCartModifyActions,
    ShoppingCartModifySelectors,
    UserLoginSelectors,
} from '@/store'
import { useTranslation } from '@/I18n'
import { setCookie, getCookie } from '@/utils'

export const useShoppingCartList = (): void => {
    const cartModify = useSelector(ShoppingCartModifySelectors.shoppingCartModify)
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    useEffect(() => {
        dispatch(
            ShoppingCartListActions.fetchShoppingCartList({
                memberId: '',
                shipType: '1',
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language, cartModify])
}

export const useShoppingCartModify = (): void => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    useEffect(() => {
        dispatch(
            ShoppingCartModifyActions.fetchShoppingCartModify({
                action: 'add',
                memberId: '',
                shoppingCartProductList: [],
            }),
        )
    }, [dispatch, i18n.language])
}

export const useShoppingCartModifyHandler = (): any => {
    const dispatch = useDispatch()
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)

    const handleCart = useCallback(
        (action: string, shoppingCartProductList: []) => {
            console.log('getUser :>> ', getUser)
            if (getUser.accessToken) {
                return dispatch(
                    ShoppingCartModifyActions.fetchShoppingCartModify({
                        action: action,
                        memberId: '',
                        shoppingCartProductList: shoppingCartProductList,
                    }),
                )
            } else {
                const cartList = getCookie('cartList')
                if (cartList == undefined) {
                    setCookie('cartList', JSON.stringify(shoppingCartProductList))
                } else {
                    const arr = cartList && JSON.parse(cartList)
                    arr.push([...shoppingCartProductList])
                    setCookie('cartList', JSON.stringify(arr))
                }
            }
        },
        [dispatch, getUser],
    )
    return { handleCart }
}
