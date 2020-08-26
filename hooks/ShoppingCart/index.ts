import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'
import {
    ShoppingCartListActions,
    ShoppingCartModifyActions,
    ShoppingCartModifySelectors,
    UserLoginSelectors,
    ShoppingCartListSelectors,
} from '@/store'
import { useTranslation } from '@/I18n'

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
    const getCartList = useSelector(ShoppingCartListSelectors.getShoppingCartListCookie)
    const handleCart = useCallback(
        (action: string, shoppingCartProductList: [], itemData: any) => {
            if (getUser.accessToken) {
                return dispatch(
                    ShoppingCartModifyActions.fetchShoppingCartModify({
                        action: action,
                        memberId: '',
                        shoppingCartProductList: shoppingCartProductList,
                    }),
                )
            } else {
                if (getCartList.length > 0) {
                    getCartList.push(itemData)
                }
                return dispatch(
                    ShoppingCartListActions.setShoppingCartListCookie({
                        data: getCartList.length > 0 ? getCartList : [itemData],
                    }),
                )
            }
        },
        [dispatch, getUser, getCartList],
    )
    return { handleCart }
}
