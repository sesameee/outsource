import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as RefundState } from '@/types/stores/refund/state'

export const refundState = (state: RootState): RefundState => state.refund

// export const getTotalItems = createSelector<RootState, RefundState, number>(refundState, (refundState: RefundState) => {
//     return refundState.refundList.totalItems
// })

export const getRefund = createSelector<RootState, RefundState, RefundState['data']>(
    refundState,
    (refundState: RefundState) => {
        return refundState.data
    },
)
