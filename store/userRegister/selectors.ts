import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as UserRegisterState } from '@/types/stores/userRegister/state'

export const userRegisterState = (state: RootState): UserRegisterState => state.userRegister

// export const getTotalItems = createSelector<RootState, UserRegisterState, number>(userRegisterState, (userRegisterState: UserRegisterState) => {
//     return userRegisterState.shoppingCartListList.totalItems
// })

export const userRegister = createSelector<RootState, UserRegisterState, UserRegisterState>(
    userRegisterState,
    (userRegisterState: UserRegisterState) => {
        return userRegisterState
    },
)
