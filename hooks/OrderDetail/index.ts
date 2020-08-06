import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { OrderDetailActions } from '@/store'
import { useTranslation } from '@/I18n'

export const usePromoCode = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            OrderDetailActions.fetchOrderDetail({
                memberId: '1',
                transId: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
