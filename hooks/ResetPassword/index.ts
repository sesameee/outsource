import { useDispatch, useSelector } from 'react-redux'
import { ResetPasswordActions, ResetPasswordSelectors } from '@/store'
import { useCallback, useEffect } from 'react'
export const useResetPasswordHandler = (): any => {
    const dispatch = useDispatch()
    const handleResetPasswordSubmit = useCallback(
        (data: { phone: '1'; pwd1: '1'; pwd2: '1'; type: 0 }) => {
            const send = {
                ...data,
                memberId: '',
            }
            dispatch(ResetPasswordActions.fetchResetPassword(send))
        },
        [dispatch],
    )

    const HandleResetPasswordRes = (setStep: any): void => {
        const Res = useSelector(ResetPasswordSelectors.resetPassword)
        const success = Res && Res.success
        useEffect(() => {
            if (success) {
                setStep(1)
            }
        }, [setStep, success])
    }
    return { handleResetPasswordSubmit, HandleResetPasswordRes }
}
