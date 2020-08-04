import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/shoppingCartModify/actions'
import { ShoppingCartModifyReqData } from '@/types/apis/shoppingCartModify'

export const shoppingCartModifySlice = createSlice({
    name: 'shoppingCartModify',
    initialState: initialState,
    reducers: {
        fetchShoppingCartModifySuccess: reducers.fetchShoppingCartModifySuccess,
        fetchShoppingCartModifyFailure: reducers.fetchShoppingCartModifyFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchShoppingCartModify = createAction<ShoppingCartModifyReqData>(types.FETCH_SHOPPINGCARTMODIFY)
const stopFetchShoppingCartModify = createAction(types.STOP_FETCH_SHOPPINGCARTMODIFY)

export const shoppingCartModifyCreateActions = { fetchShoppingCartModify, stopFetchShoppingCartModify }
