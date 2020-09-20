import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { PromoCodeActions, ShoppingCartListActions } from '@/store'
import { useTranslation } from '@/I18n'
import { ShoppingCartListReqData } from '@/types/apis/shoppingCartList'
import { setCookie } from '@/utils'

export const usePromoCode = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            PromoCodeActions.fetchPromoCode({
                promoCode: '',
                memberId: '',
                pid: [],
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language])
}

export const usePromoCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handlePromoCodeSubmit = useCallback(
        (promoCode: string) => {
            setCookie('promoCode', promoCode)
            const data: ShoppingCartListReqData = {
                promoCode,
                memberId: '',
                accessToken: '',
                shipType: '1',
            }
            dispatch(ShoppingCartListActions.fetchShoppingCartList(data))
        },
        [dispatch],
    )
    return { handlePromoCodeSubmit }
}
