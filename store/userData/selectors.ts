import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as UserDataState } from '@/types/stores/userData/state'

export const userDataState = (state: RootState): UserDataState => state.userData

// export const getTotalItems = createSelector<RootState, UserDataState, number>(userDataState, (userDataState: UserDataState) => {
//     return userDataState.shoppingCartListList.totalItems
// })

export const getUserData = createSelector<RootState, UserDataState, UserDataState['data']>(
    userDataState,
    (userDataState: UserDataState) => {
        return userDataState.data
    },
)
