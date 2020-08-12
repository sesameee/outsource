import { useDispatch } from 'react-redux'
import { VerifyInvBarCodeActions } from '@/store'
import { useCallback } from 'react'
import { VerifyInvBarCodeReqData } from '@/types/apis/verifyInvBarCode'

export const useVerifyInvBarCodeHandler = (): any => {
    const dispatch = useDispatch()
    const handleVerifyInvBarCodeSubmit = useCallback(
        (barCode: string) => {
            const data = {
                memberId: '1',
                barCode,
                accessToken: '1',
            }
            dispatch(VerifyInvBarCodeActions.fetchVerifyInvBarCode(data))
        },
        [dispatch],
    )
    return { handleVerifyInvBarCodeSubmit }
}
