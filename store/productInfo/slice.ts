import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/productInfo/actions'
import { ProductInfoReqData } from '@/types/apis/productInfo'

export const productInfoSlice = createSlice({
    name: 'productInfo',
    initialState: initialState,
    reducers: {
        fetchProductInfoSuccess: reducers.fetchProductInfoSuccess,
        fetchProductInfoFailure: reducers.fetchProductInfoFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchProductInfo = createAction<ProductInfoReqData>(types.FETCH_PRODUCTINFO)
const stopFetchProductInfo = createAction(types.STOP_FETCH_PRODUCTINFO)

export const productInfoCreateActions = { fetchProductInfo, stopFetchProductInfo }
