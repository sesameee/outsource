import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as VerifyCodeState } from '@/types/stores/verifyCode/state'

export const verifyCodeState = (state: RootState): VerifyCodeState => state.verifyCode

// export const getTotalItems = createSelector<RootState, VerifyCodeState, number>(verifyCodeState, (verifyCodeState: VerifyCodeState) => {
//     return verifyCodeState.verifyCode.totalItems
// })

export const getVerifyCode = createSelector<
    RootState,
    VerifyCodeState,
    VerifyCodeState['data']
>(verifyCodeState, (verifyCodeState: VerifyCodeState) => {
    return verifyCodeState.data
})
