import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ShoppingCartListActions, ShoppingCartModifyActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useShoppingCartList = (): void => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    useEffect(() => {
        dispatch(
            ShoppingCartListActions.fetchShoppingCartList({
                memberId: '1',
                shipType: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}

export const useShoppingCartModify = (): void => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    useEffect(() => {
        dispatch(
            ShoppingCartModifyActions.fetchShoppingCartModify({
                action: 'add',
                memberId: '1',
                shoppingCartProductList: [],
            }),
        )
    }, [dispatch, i18n.language])
}