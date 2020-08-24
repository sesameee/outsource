import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { OrderDetailActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useOrderDetail = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            OrderDetailActions.fetchOrderDetail({
                memberId: '',
                transId: '',
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language])
}

import { useCallback } from 'react'
export const useOrderDetailHandler = (): any => {
    const dispatch = useDispatch()
    const getOrderDetail = useCallback(
        (transId) => {
            dispatch(
                OrderDetailActions.fetchOrderDetail({
                    memberId: '1',
                    transId,
                    accessToken: '1',
                }),
            )
        },
        [dispatch],
    )
    return { getOrderDetail }
}
