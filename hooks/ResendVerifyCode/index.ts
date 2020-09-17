import { useDispatch, useSelector } from 'react-redux'
import { ResendVerifyCodeActions, ResendVerifyCodeSelectors } from '@/store'
import { useCallback, useEffect } from 'react'
import { ResendVerifyCodeReqData } from '@/types/apis/resendVerifyCode'

export const useResendVerifyCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleResendVerifyCodeSubmit = useCallback(
        (data: ResendVerifyCodeReqData) => {
            dispatch(ResendVerifyCodeActions.fetchResendVerifyCode(data))
        },
        [dispatch],
    )

    const HandleResendVerifyCodeRes = (setStep: any): void => {
        const Res = useSelector(ResendVerifyCodeSelectors.resendVerifyCode)
        const success = Res && Res.success
        useEffect(() => {
            if (success) {
                setStep(2)
                handleReset()
            }
        }, [setStep, success])
    }
    const handleReset = useCallback(() => {
        dispatch(ResendVerifyCodeActions.reset())
    }, [dispatch])
    return { handleResendVerifyCodeSubmit, handleReset, HandleResendVerifyCodeRes }
}
