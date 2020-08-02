import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { WishListActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useWishList = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(WishListActions.fetchWishList())
    }, [dispatch, i18n.language])
}
