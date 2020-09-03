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
    const { t } = useTranslation()
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
                    const sendData = {
                        cid: itemData.cid,
                        pid: itemData.pid,
                        spec1: itemData.spec1,
                        spec2: itemData.spec2,
                        qty: itemData.qty,
                        imageUrl: itemData.imageUrl && itemData.imageUrl[0],
                        price: itemData.price,
                        pName: itemData.pName,
                        mName: itemData.mName,
                    }
                    if (getCartList.length > 0) {
                        let isAdd = false
                        newCart = getCartList.map((item) => {
                            if (
                                item.cid == itemData.cid &&
                                item.pid == itemData.pid &&
                                item.spec1 == itemData.spec1 &&
                                item.spec2 == itemData.spec2 &&
                                item.productName == itemData.productName
                            ) {
                                isAdd = true
                                return {
                                    cid: item.cid,
                                    pid: item.pid,
                                    spec1: item.spec1,
                                    spec2: item.spec2,
                                    qty: item.qty + itemData.qty,
                                    imageUrl: item.imageUrl && item.imageUrl[0],
                                    price: item.price,
                                    pName: item.pName,
                                    mName: itemData.mName,
                                }
                            }
                            return item
                        })
                        if (!isAdd) {
                            newCart.push(sendData)
                        }
                    }
                    return (
                        dispatch(
                            ShoppingCartListActions.setShoppingCartListCookie({
                                data: newCart.length > 0 ? newCart : [sendData],
                            }),
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: t('addedCart') }))
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
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: t('isDelete') }))
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
        [dispatch, getUser, getCartList, t],
    )
    return { handleCart }
}
