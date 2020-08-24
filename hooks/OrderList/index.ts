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
                memberId: '',
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language])
}
