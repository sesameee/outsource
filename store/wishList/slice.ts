import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/wishList/actions'

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState: initialState,
    reducers: {
        fetchWishListSuccess: reducers.fetchWishListSuccess,
        fetchWishListFailure: reducers.fetchWishListFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchWishList = createAction(types.FETCH_WISHLIST)
const stopFetchWishList = createAction(types.STOP_FETCH_WISHLIST)

export const wishListCreateActions = { fetchWishList, stopFetchWishList }
