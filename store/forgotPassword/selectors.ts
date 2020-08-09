import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ForgotPasswordState } from '@/types/stores/forgotPassword/state'

export const forgotPasswordState = (state: RootState): ForgotPasswordState => state.forgotPassword

// export const getTotalItems = createSelector<RootState, ForgotPasswordState, number>(forgotPasswordState, (forgotPasswordState: ForgotPasswordState) => {
//     return forgotPasswordState.shoppingCartListList.totalItems
// })

export const forgotPassword = createSelector<RootState, ForgotPasswordState, ForgotPasswordState>(
    forgotPasswordState,
    (forgotPasswordState: ForgotPasswordState) => {
        return forgotPasswordState
    },
)
