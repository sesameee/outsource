import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as WishListState } from '@/types/stores/wishList/state'

export const wishListState = (state: RootState): WishListState => state.wishList

// export const getTotalItems = createSelector<RootState, WishListListState, number>(wishListState, (wishListState: WishListListState) => {
//     return wishListState.wishList.totalItems
// })

export const getWishList = createSelector<RootState, WishListState, WishListState>(
    wishListState,
    (wishListState: WishListState) => {
        return wishListState
    },
)
