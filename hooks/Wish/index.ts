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
    const { t } = useTranslation()
    const wishTips1 = t('wishTips1')
    const wishTips2 = t('wishTips2')
    const isDelete = t('isDelete')
    const tips = {
        wishTips1,
        wishTips2,
        isDelete,
    }
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
                        return dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: tips.wishTips1 }))
                    }
                    newWish.push(itemData)
                    return (
                        dispatch(
                            WishListActions.setWishListCookie({
                                data: newWish.length > 0 ? newWish : [itemData],
                            }),
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: tips.wishTips2 }))
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
                        ) && dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: tips.isDelete }))
                    )
                }
            }
        },
        [dispatch, getUser.accessToken, getWishList, tips],
    )
    return { handleWish }
}
