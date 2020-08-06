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
                memberId: '1',
                cid: '1',
                pid: '1',
                spec1: '1',
                spec2: '1',
                qty: 1,
                reason: '1',
                memo: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
