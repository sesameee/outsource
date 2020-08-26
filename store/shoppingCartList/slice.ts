import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/shoppingCartList/actions'
import { ShoppingCartListReqData } from '@/types/apis/shoppingCartList'

export const shoppingCartListSlice = createSlice({
    name: 'shoppingCartList',
    initialState: initialState,
    reducers: {
        fetchShoppingCartListSuccess: reducers.fetchShoppingCartListSuccess,
        fetchShoppingCartListFailure: reducers.fetchShoppingCartListFailure,
        setShoppingCartListCookie: reducers.setShoppingCartListCookie,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchShoppingCartList = createAction<ShoppingCartListReqData>(types.FETCH_SHOPPINGCARTLIST)
const stopFetchShoppingCartList = createAction(types.STOP_FETCH_SHOPPINGCARTLIST)

export const shoppingCartListCreateActions = { fetchShoppingCartList, stopFetchShoppingCartList }
