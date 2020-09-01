import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'
import {
    ShoppingCartListActions,
    ShoppingCartModifyActions,
    UserLoginSelectors,
    ShoppingCartListSelectors,
    ErrorAlertActions,
} from '@/store'
import { useTranslation } from '@/I18n'

export const useShoppingCartList = (): void => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    useEffect(() => {
        if (getUser.accessToken) {
            dispatch(
                ShoppingCartListActions.fetchShoppingCartList({
                    memberId: '',
                    shipType: '1',
                    accessToken: '',
                }),
            )
        }
    }, [dispatch, i18n.language, getUser.accessToken])
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
                return (
                    dispatch(
                        ShoppingCartModifyActions.fetchShoppingCartModify({
                            action: action,
                            memberId: '',
                            shoppingCartProductList: shoppingCartProductList,
                        }),
                    ) &&
                    dispatch(
                        ShoppingCartListActions.setShoppingCartListCookie({
                            data: [],
                        }),
                    )
                )
            } else {
                if (action == 'add') {
                    let newCart = getCartList
                    if (getCartList.length > 0) {
                        let isAdd = false
                        newCart = getCartList.map((item) => {
                            if (item.cid == itemData.cid && item.pid == itemData.pid) {
                                isAdd = true
                                return { ...item, qty: item.qty + itemData.qty }
                            }
                            return item
                        })
                        if (!isAdd) {
                            newCart.push(itemData)
                        }
                    }
                    return (
                        dispatch(
                            ShoppingCartListActions.setShoppingCartListCookie({
                                data: newCart.length > 0 ? newCart : [itemData],
                            }),
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已新增至購物車' }))
                    )
                } else if (action == 'delete') {
                    if (getCartList.length > 0) {
                        getCartList.splice(itemData, 1)
                    }
                    return (
                        dispatch(
                            ShoppingCartListActions.setShoppingCartListCookie({
                                data: getCartList,
                            }),
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已刪除' }))
                    )
                } else {
                    return dispatch(
                        ShoppingCartListActions.setShoppingCartListCookie({
                            data: getCartList,
                        }),
                    )
                }
            }
        },
        [dispatch, getUser, getCartList],
    )
    return { handleCart }
}
