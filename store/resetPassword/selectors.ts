import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ResetPasswordState } from '@/types/stores/resetPassword/state'

export const resetPasswordState = (state: RootState): ResetPasswordState => state.resetPassword

// export const getTotalItems = createSelector<RootState, ResetPasswordState, number>(resetPasswordState, (resetPasswordState: ResetPasswordState) => {
//     return resetPasswordState.shoppingCartListList.totalItems
// })

export const resetPassword = createSelector<RootState, ResetPasswordState, ResetPasswordState>(
    resetPasswordState,
    (resetPasswordState: ResetPasswordState) => {
        return resetPasswordState
    },
)
