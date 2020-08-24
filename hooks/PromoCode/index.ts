import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { PromoCodeActions, ShoppingCartListSelectors } from '@/store'
import { useTranslation } from '@/I18n'
import { PromoCodeReqData } from '@/types/apis/promoCode'
import { useSelector } from 'react-redux'

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
    const pid = useSelector(ShoppingCartListSelectors.getShoppingCartPidList)
    const dispatch = useDispatch()
    const handlePromoCodeSubmit = useCallback(
        (promoCode: string) => {
            const data: PromoCodeReqData = {
                promoCode,
                memberId: '',
                pid: pid,
                accessToken: '',
            }
            dispatch(PromoCodeActions.fetchPromoCode(data))
        },
        [dispatch, pid],
    )
    return { handlePromoCodeSubmit }
}
