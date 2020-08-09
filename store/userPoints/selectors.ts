import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as UserPointsState } from '@/types/stores/userPoints/state'

export const userPointsState = (state: RootState): UserPointsState => state.userPoints

// export const getTotalItems = createSelector<RootState, UserPointsState, number>(userPointsState, (userPointsState: UserPointsState) => {
//     return userPointsState.shoppingCartListList.totalItems
// })

export const userPoints = createSelector<RootState, UserPointsState, UserPointsState>(
    userPointsState,
    (userPointsState: UserPointsState) => {
        return userPointsState
    },
)
