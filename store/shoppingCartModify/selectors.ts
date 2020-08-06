import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ShoppingCartModifyState } from '@/types/stores/shoppingCartModify/state'

export const shoppingCartModifyState = (state: RootState): ShoppingCartModifyState => state.shoppingCartModify

// export const getTotalItems = createSelector<RootState, ShoppingCartModifyState, number>(shoppingCartModifyState, (shoppingCartModifyState: ShoppingCartModifyState) => {
//     return shoppingCartModifyState.shoppingCartListList.totalItems
// })

export const shoppingCartModify = createSelector<
    RootState,
    ShoppingCartModifyState,
    ShoppingCartModifyState['message']
>(shoppingCartModifyState, (shoppingCartModifyState: ShoppingCartModifyState) => {
    return shoppingCartModifyState.message
})
