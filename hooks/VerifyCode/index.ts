import { useDispatch } from 'react-redux'
import { VerifyCodeActions } from '@/store'
import { useCallback } from 'react'

export const useVerifyCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleVerifyCodeSubmit = useCallback(
        () => {
            const data = {
                memberId: '1',
                code: '1',
            }
            dispatch(VerifyCodeActions.fetchVerifyCode(data))
        },
        [dispatch],
    )
    const handleReset = useCallback(() => {
        dispatch(VerifyCodeActions.reset())
    }, [dispatch])
    return { handleVerifyCodeSubmit, handleReset }
}
