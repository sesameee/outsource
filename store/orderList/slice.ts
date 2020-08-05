import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/orderList/actions'
import { OrderListReqData } from '@/types/apis/orderList'

export const orderListSlice = createSlice({
    name: 'orderList',
    initialState: initialState,
    reducers: {
        fetchOrderListSuccess: reducers.fetchOrderListSuccess,
        fetchOrderListFailure: reducers.fetchOrderListFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchOrderList = createAction<OrderListReqData>(types.FETCH_ORDER_LIST)
const stopFetchOrderList = createAction(types.STOP_FETCH_ORDER_LIST)

export const orderListCreateActions = { fetchOrderList, stopFetchOrderList }
