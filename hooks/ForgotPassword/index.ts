import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPasswordActions, ForgotPasswordSelectors } from '@/store'
import { ForgotPasswordReqData } from '@/types/apis/forgotPassword'

export const useForgotPassword = (): any => {
    const dispatch = useDispatch()
    const handleForgotPasswordSubmit = useCallback(
        (data: ForgotPasswordReqData) => {
            dispatch(ForgotPasswordActions.fetchForgotPassword(data))
        },
        [dispatch],
    )

    const HandleForgotPasswordRes = (setStep: any): void => {
        const res = useSelector(ForgotPasswordSelectors.forgotPassword)
        useEffect(() => {
            if (res.data.success) {
                setStep(2)
            }
        }, [setStep, res])
    }
    return { handleForgotPasswordSubmit, HandleForgotPasswordRes }
}
