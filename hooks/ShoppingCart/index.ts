import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'
import { ShoppingCartListActions, ShoppingCartModifyActions, ShoppingCartModifySelectors } from '@/store'
import { useTranslation } from '@/I18n'

export const useShoppingCartList = (shipType: string): void => {
    const cartModify = useSelector(ShoppingCartModifySelectors.shoppingCartModify)
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    useEffect(() => {
        dispatch(
            ShoppingCartListActions.fetchShoppingCartList({
                memberId: '',
                shipType,
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language, cartModify, shipType])
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
