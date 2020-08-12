import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { OrderListActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useOrderList = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            OrderListActions.fetchOrderList({
                memberId: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
