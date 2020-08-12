import { useDispatch } from 'react-redux'
import { ResetPasswordActions } from '@/store'
import { useCallback } from 'react'
export const useResetPasswordHandler = (): any => {
    const dispatch = useDispatch()
    const handleResetPasswordSubmit = useCallback(
        (data: { phone: '1'; pwd1: '1'; pwd2: '1'; type: 0 }) => {
            const send = {
                ...data,
                memberId: '1',
            }
            dispatch(ResetPasswordActions.fetchResetPassword(send))
        },
        [dispatch],
    )
    return { handleResetPasswordSubmit }
}
