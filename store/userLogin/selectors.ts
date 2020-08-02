import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as UserLoginState } from '@/types/stores/userLogin/state'

export const userLoginState = (state: RootState): UserLoginState => state.userLogin

// export const getTotalItems = createSelector<RootState, UserLoginState, number>(userLoginState, (userLoginState: UserLoginState) => {
//     return userLoginState.userLoginList.totalItems
// })

export const getUserLoginData = createSelector<RootState, UserLoginState, UserLoginState['userLoginData']>(
    userLoginState,
    (userLoginState: UserLoginState) => {
        return userLoginState.userLoginData
    },
)
