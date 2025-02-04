import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RefundActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useRefund = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            RefundActions.fetchRefund({
                memberId: '',
                cid: '',
                pid: '',
                spec1: '',
                spec2: '',
                qty: 1,
                reason: '',
                memo: '',
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language])
}

import { useCallback } from 'react'
import { RefundReqData } from '@/types/apis/refund'
export const useRefundHandler = (): any => {
    const dispatch = useDispatch()
    const handleRefundSubmit = useCallback(
        (data: RefundReqData) => {
            dispatch(RefundActions.fetchRefund(data))
        },
        [dispatch],
    )
    return { handleRefundSubmit }
}
