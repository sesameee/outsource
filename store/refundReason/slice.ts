import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/refundReason/actions'

export const refundReasonSlice = createSlice({
    name: 'refundReason',
    initialState: initialState,
    reducers: {
        fetchRefundReasonSuccess: reducers.fetchRefundReasonSuccess,
        fetchRefundReasonFailure: reducers.fetchRefundReasonFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchRefundReason = createAction(types.FETCH_REFUND_REASON)
const stopFetchRefundReason = createAction(types.STOP_FETCH_REFUND_REASON)

export const refundReasonCreateActions = { fetchRefundReason, stopFetchRefundReason }
