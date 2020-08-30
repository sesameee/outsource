import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WishListActions, WishModifyActions, UserLoginSelectors, WishListSelectors } from '@/store'
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
                return dispatch(
                    WishModifyActions.fetchWishModify({
                        action: action,
                        memberId: '',
                        shoppingWishProductList: shoppingCartProductList,
                        accessToken: '',
                    }),
                )
            } else {
                if (action == 'add') {
                    if (getWishList.length > 0) {
                        getWishList.push(itemData)
                    }
                    return dispatch(
                        WishListActions.setWishListCookie({
                            data: getWishList.length > 0 ? getWishList : [itemData],
                        }),
                    )
                } else if (action == 'delete') {
                    if (getWishList.length > 0) {
                        getWishList.splice(itemData, 1)
                    }
                    return dispatch(
                        WishListActions.setWishListCookie({
                            data: getWishList,
                        }),
                    )
                }
            }
        },
        [dispatch, getUser, getWishList],
    )
    return { handleWish }
}
