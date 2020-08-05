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

export const getShoppingCartPriceList = createSelector(getShoppingCartList, (list) => {
    return list.map((item: { shoppingCartProducts: any[] }) => {
        if (item.shoppingCartProducts && item.shoppingCartProducts[0]) {
            const detail = item.shoppingCartProducts[0]
            return detail?.price && detail?.qty && detail?.price * detail?.qty
        } else {
            return 0
        }
    })
})
