import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WishListActions, WishModifyActions, UserLoginSelectors, WishListSelectors, ErrorAlertActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useWishList = (): void => {
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        if (getUser.accessToken) {
            dispatch(WishListActions.fetchWishList())
        }
    }, [dispatch, i18n.language, getUser])
}

export const useWishModify = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            WishModifyActions.fetchWishModify({
                action: 'add',
                memberId: '',
                shoppingWishProductList: [],
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language])
}

export const useWishModifyHandler = (): any => {
    const dispatch = useDispatch()
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    const getWishList = useSelector(WishListSelectors.getWishListCookie)
    const handleWish = useCallback(
        (action: string, shoppingCartProductList: [], itemData: any) => {
            if (getUser.accessToken) {
                return (
                    dispatch(
                        WishModifyActions.fetchWishModify({
                            action: action,
                            memberId: '',
                            shoppingWishProductList: shoppingCartProductList,
                            accessToken: '',
                        }),
                    ) &&
                    dispatch(
                        WishListActions.setWishListCookie({
                            data: [],
                        }),
                    )
                )
            } else {
                if (action == 'add') {
                    const newWish = getWishList
                    let isAdd = false
                    if (getWishList.length > 0) {
                        getWishList.map((item: any) => {
                            if (item.cid == itemData.cid && item.pid == itemData.pid) {
                                isAdd = true
                            }
                        })
                    }
                    if (isAdd) {
                        return dispatch(
                            ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '此單品已存在在願望清單' }),
                        )
                    }
                    newWish.push(itemData)
                    return (
                        dispatch(
                            WishListActions.setWishListCookie({
                                data: newWish.length > 0 ? newWish : [itemData],
                            }),
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已新增至願望清單' }))
                    )
                } else if (action == 'delete') {
                    if (getWishList.length > 0) {
                        getWishList.splice(itemData, 1)
                    }
                    return (
                        dispatch(
                            WishListActions.setWishListCookie({
                                data: getWishList,
                            }),
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已刪除' }))
                    )
                }
            }
        },
        [dispatch, getUser, getWishList],
    )
    return { handleWish }
}
