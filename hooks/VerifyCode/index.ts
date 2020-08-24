import { useDispatch, useSelector } from 'react-redux'
import { VerifyCodeActions, VerifyCodeSelectors } from '@/store'
import { useCallback, useEffect } from 'react'
import { VerifyCodeReqData } from '@/types/apis/verifyCode'

export const useVerifyCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleVerifyCodeSubmit = useCallback(
        (data: VerifyCodeReqData) => {
            dispatch(VerifyCodeActions.fetchVerifyCode(data))
        },
        [dispatch],
    )
    const HandleVerifyCodeRes = (setStep: any): void => {
        const Res = useSelector(VerifyCodeSelectors.getVerifyCode)
        useEffect(() => {
            if (Res.accessToken != '') {
                setStep(3)
            }
        }, [setStep, Res.accessToken])
    }
    const handleReset = useCallback(() => {
        dispatch(VerifyCodeActions.reset())
    }, [dispatch])
    return { handleVerifyCodeSubmit, HandleVerifyCodeRes, handleReset }
}
