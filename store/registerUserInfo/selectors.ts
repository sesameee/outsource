import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as RegisterUserInfoState } from '@/types/stores/registerUserInfo/state'

export const registerUserInfoState = (state: RootState): RegisterUserInfoState => state.registerUserInfo

// export const getTotalItems = createSelector<RootState, RegisterUserInfoState, number>(registerUserInfoState, (registerUserInfoState: RegisterUserInfoState) => {
//     return registerUserInfoState.shoppingCartListList.totalItems
// })

export const registerUserInfo = createSelector<RootState, RegisterUserInfoState, RegisterUserInfoState>(
    registerUserInfoState,
    (registerUserInfoState: RegisterUserInfoState) => {
        return registerUserInfoState
    },
)
