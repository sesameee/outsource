import { useDispatch } from 'react-redux'
import { ResendVerifyCodeActions } from '@/store'
import { useCallback } from 'react'
import { ResendVerifyCodeReqData } from '@/types/apis/resendVerifyCode'

export const useResendVerifyCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleResendVerifyCodeSubmit = useCallback(
        (data: ResendVerifyCodeReqData) => {
            dispatch(ResendVerifyCodeActions.fetchResendVerifyCode(data))
        },
        [dispatch],
    )
    const handleReset = useCallback(() => {
        dispatch(ResendVerifyCodeActions.reset())
    }, [dispatch])
    return { handleResendVerifyCodeSubmit, handleReset }
}
