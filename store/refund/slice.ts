import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/refund/actions'
import { RefundReqData } from '@/types/apis/refund'

export const refundSlice = createSlice({
    name: 'refund',
    initialState: initialState,
    reducers: {
        fetchRefundSuccess: reducers.fetchRefundSuccess,
        fetchRefundFailure: reducers.fetchRefundFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchRefund = createAction<RefundReqData>(types.FETCH_REFUND)
const stopFetchRefund = createAction(types.STOP_FETCH_REFUND)

export const refundCreateActions = { fetchRefund, stopFetchRefund }
