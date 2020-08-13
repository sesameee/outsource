import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

// export const useVerifyCodeHandler = (): any => {
//     const dispatch = useDispatch()
//     const handleVerifyCodeSubmit = useCallback(
//         (barCode: string) => {
//             const data = {
//                 memberId: '1',
//                 barCode,
//                 accessToken: '1',
//             }
//             dispatch(VerifyCodeActions.fetchVerifyCode(data))
//         },
//         [dispatch],
//     )
//     const handleReset = useCallback(() => {
//         dispatch(VerifyCodeActions.reset())
//     }, [dispatch])
//     return { handleVerifyCodeSubmit, handleReset }
}
