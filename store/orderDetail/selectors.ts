import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as OrderDetailState } from '@/types/stores/orderDetail/state'

export const orderDetailState = (state: RootState): OrderDetailState => state.orderDetail

// export const getTotalItems = createSelector<RootState, OrderDetailState, number>(orderDetailState, (orderDetailState: OrderDetailState) => {
//     return orderDetailState.shoppingCartListList.totalItems
// })

export const orderDetail = createSelector<RootState, OrderDetailState, OrderDetailState['data']>(
    orderDetailState,
    (orderDetailState: OrderDetailState) => {
        return orderDetailState.data
    },
)
