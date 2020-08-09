import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as UserSetupState } from '@/types/stores/userSetup/state'

export const userSetupState = (state: RootState): UserSetupState => state.userSetup

// export const getTotalItems = createSelector<RootState, UserSetupState, number>(userSetupState, (userSetupState: UserSetupState) => {
//     return userSetupState.shoppingCartListList.totalItems
// })

export const userSetup = createSelector<RootState, UserSetupState, UserSetupState>(
    userSetupState,
    (userSetupState: UserSetupState) => {
        return userSetupState
    },
)
