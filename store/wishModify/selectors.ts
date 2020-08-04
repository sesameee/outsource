import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as WishModifyState } from '@/types/stores/wishModify/state'

export const wishModifyState = (state: RootState): WishModifyState => state.wishModify

// export const getTotalItems = createSelector<RootState, WishModifyState, number>(wishModifyState, (wishModifyState: WishModifyState) => {
//     return wishModifyState.shoppingCartListList.totalItems
// })

export const wishModify = createSelector<
    RootState,
    WishModifyState,
    WishModifyState['message']
>(wishModifyState, (wishModifyState: WishModifyState) => {
    return wishModifyState.message
})
