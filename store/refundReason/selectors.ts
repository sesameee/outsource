import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as RefundReasonState } from '@/types/stores/refundReason/state'

export const refundReasonState = (state: RootState): RefundReasonState => state.refundReason

// export const getTotalItems = createSelector<RootState, RefundReasonState, number>(refundReasonState, (refundReasonState: RefundReasonState) => {
//     return refundReasonState.refundReasonList.totalItems
// })

export const getRefundReason = createSelector<RootState, RefundReasonState, RefundReasonState['data']>(
    refundReasonState,
    (refundReasonState: RefundReasonState) => {
        return refundReasonState.data
    },
)
