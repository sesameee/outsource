import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/orderDetail/actions'
import { OrderDetailReqData } from '@/types/apis/orderDetail'

export const orderDetailSlice = createSlice({
    name: 'orderDetail',
    initialState: initialState,
    reducers: {
        fetchOrderDetailSuccess: reducers.fetchOrderDetailSuccess,
        fetchOrderDetailFailure: reducers.fetchOrderDetailFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchOrderDetail = createAction<OrderDetailReqData>(types.FETCH_ORDER_DETAIL)
const stopFetchOrderDetail = createAction(types.STOP_FETCH_ORDER_DETAIL)

export const orderDetailCreateActions = { fetchOrderDetail, stopFetchOrderDetail }
