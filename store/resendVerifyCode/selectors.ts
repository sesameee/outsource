import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ResendVerifyCodeState } from '@/types/stores/resendVerifyCode/state'

export const resendVerifyCodeState = (state: RootState): ResendVerifyCodeState => state.resendVerifyCode

// export const getTotalItems = createSelector<RootState, ResendVerifyCodeState, number>(resendVerifyCodeState, (resendVerifyCodeState: ResendVerifyCodeState) => {
//     return resendVerifyCodeState.shoppingCartListList.totalItems
// })

export const resendVerifyCode = createSelector<RootState, ResendVerifyCodeState, ResendVerifyCodeState>(
    resendVerifyCodeState,
    (resendVerifyCodeState: ResendVerifyCodeState) => {
        return resendVerifyCodeState
    },
)
