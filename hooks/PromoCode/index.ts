import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PromoCodeActions } from '@/store'
import { useTranslation } from '@/I18n'

export const usePromoCode = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PromoCodeActions.fetchPromoCode({
            promoCode: '1',
            memberId: '1',
            pid: [],
            accessToken: '1',
        }))
    }, [dispatch, i18n.language])
}
