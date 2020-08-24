import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { WishListActions, WishModifyActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useWishList = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(WishListActions.fetchWishList())
    }, [dispatch, i18n.language])
}

export const useWishModify = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            WishModifyActions.fetchWishModify({
                action: 'add',
                memberId: '',
                shoppingCartProductList: [],
            }),
        )
    }, [dispatch, i18n.language])
}
