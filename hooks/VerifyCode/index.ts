import { useDispatch } from 'react-redux'
import { VerifyCodeActions } from '@/store'
import { useCallback } from 'react'
import { VerifyCodeReqData } from '@/types/apis/verifyCode'

export const useVerifyCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleVerifyCodeSubmit = useCallback(
        (data: VerifyCodeReqData) => {
            dispatch(VerifyCodeActions.fetchVerifyCode(data))
        },
        [dispatch],
    )
    const handleReset = useCallback(() => {
        dispatch(VerifyCodeActions.reset())
    }, [dispatch])
    return { handleVerifyCodeSubmit, handleReset }
}
