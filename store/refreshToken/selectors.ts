import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as RefreshTokenListState } from '@/types/stores/refreshToken/state'

export const refreshTokenState = (state: RootState): RefreshTokenListState => state.refreshToken

// export const getTotalItems = createSelector<RootState, RefreshTokenListState, number>(refreshTokenState, (refreshTokenState: RefreshTokenListState) => {
//     return refreshTokenState.refreshToken.totalItems
// })

export const getRefreshTokenList = createSelector<RootState, RefreshTokenListState, RefreshTokenListState['data']>(
    refreshTokenState,
    (refreshTokenState: RefreshTokenListState) => {
        return refreshTokenState.data
    },
)
