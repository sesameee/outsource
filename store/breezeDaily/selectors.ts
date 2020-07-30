import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as BreezeDailyListState } from '@/types/stores/breezeDaily/state'

export const breezeDailyState = (state: RootState): BreezeDailyListState => state.breezeDaily

// export const getTotalItems = createSelector<RootState, BreezeDailyListState, number>(breezeDailyState, (breezeDailyState: BreezeDailyListState) => {
//     return breezeDailyState.breezeDaily.totalItems
// })

export const getBreezeDailyList = createSelector<
    RootState,
    BreezeDailyListState,
    BreezeDailyListState['breezeDailyList']
>(breezeDailyState, (breezeDailyState: BreezeDailyListState) => {
    return breezeDailyState.breezeDailyList
})
