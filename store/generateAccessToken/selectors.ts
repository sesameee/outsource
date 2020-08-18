import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as GenerateAccessTokenListState } from '@/types/stores/generateAccessToken/state'

export const generateAccessTokenState = (state: RootState): GenerateAccessTokenListState => state.generateAccessToken

// export const getTotalItems = createSelector<RootState, GenerateAccessTokenListState, number>(generateAccessTokenState, (generateAccessTokenState: GenerateAccessTokenListState) => {
//     return generateAccessTokenState.generateAccessToken.totalItems
// })

export const getGenerateAccessTokenList = createSelector<
    RootState,
    GenerateAccessTokenListState,
    GenerateAccessTokenListState['data']
>(generateAccessTokenState, (generateAccessTokenState: GenerateAccessTokenListState) => {
    return generateAccessTokenState.data
})
