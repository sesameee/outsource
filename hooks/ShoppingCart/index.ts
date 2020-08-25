import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'
import { ShoppingCartListActions, ShoppingCartModifyActions, ShoppingCartModifySelectors } from '@/store'
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
    const handleCart = useCallback(
        (action: string, shoppingCartProductList: []) =>
            dispatch(
                ShoppingCartModifyActions.fetchShoppingCartModify({
                    action: action,
                    memberId: '',
                    shoppingCartProductList: shoppingCartProductList,
                }),
            ),
        [dispatch],
    )
    return { handleCart }
}
