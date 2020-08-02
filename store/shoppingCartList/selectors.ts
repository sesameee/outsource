import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ShoppingCartListState } from '@/types/stores/shoppingCartList/state'

export const shoppingCartListState = (state: RootState): ShoppingCartListState => state.shoppingCartList

// export const getTotalItems = createSelector<RootState, ShoppingCartListState, number>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
//     return shoppingCartListState.shoppingCartListList.totalItems
// })

export const getShoppingCartList = createSelector<
    RootState,
    ShoppingCartListState,
    ShoppingCartListState['shoppingCartListData']
>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
    return shoppingCartListState.shoppingCartListData
})
