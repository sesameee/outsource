import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { RefundReasonActions } from '@/store'

export const useRefundReason = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RefundReasonActions.fetchRefundReason())
    }, [dispatch])
}
