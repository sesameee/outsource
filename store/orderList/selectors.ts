import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as OrderListState } from '@/types/stores/orderList/state'

export const orderListState = (state: RootState): OrderListState => state.orderList

// export const getTotalItems = createSelector<RootState, OrderListState, number>(orderListState, (orderListState: OrderListState) => {
//     return orderListState.shoppingCartListList.totalItems
// })

export const orderList = createSelector<RootState, OrderListState, OrderListState['data']>(
    orderListState,
    (orderListState: OrderListState) => {
        return orderListState.data
    },
)
