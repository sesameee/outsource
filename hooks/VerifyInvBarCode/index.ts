import { useDispatch } from 'react-redux'
import { VerifyInvBarCodeActions } from '@/store'
import { useCallback } from 'react'

export const useVerifyInvBarCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleVerifyInvBarCodeSubmit = useCallback(
        (barCode: string) => {
            const data = {
                memberId: '',
                barCode,
                accessToken: '',
            }
            dispatch(VerifyInvBarCodeActions.fetchVerifyInvBarCode(data))
        },
        [dispatch],
    )
    const handleReset = useCallback(() => {
        dispatch(VerifyInvBarCodeActions.reset())
    }, [dispatch])
    return { handleVerifyInvBarCodeSubmit, handleReset }
}
