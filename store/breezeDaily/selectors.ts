import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as BreezeDailyState } from '@/types/stores/breezeDaily/state'

export const breezeDailyState = (state: RootState): BreezeDailyState => state.breezeDaily

// export const getTotalItems = createSelector<RootState, BreezeDailyState, number>(breezeDailyState, (breezeDailyState: BreezeDailyState) => {
//     return breezeDailyState.breezeDailyList.totalItems
// })

export const getBreezeDailyList = createSelector<RootState, BreezeDailyState, BreezeDailyState['breezeDailyList']>(
    breezeDailyState,
    (breezeDailyState: BreezeDailyState) => {
        return breezeDailyState.breezeDailyList
    },
)
