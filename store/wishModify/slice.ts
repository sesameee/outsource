import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/wishModify/actions'
import { WishModifyReqData } from '@/types/apis/wishModify'

export const wishModifySlice = createSlice({
    name: 'wishModify',
    initialState: initialState,
    reducers: {
        fetchWishModifySuccess: reducers.fetchWishModifySuccess,
        fetchWishModifyFailure: reducers.fetchWishModifyFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchWishModify = createAction<WishModifyReqData>(types.FETCH_WISHMODIFY)
const stopFetchWishModify = createAction(types.STOP_FETCH_WISHMODIFY)

export const wishModifyCreateActions = { fetchWishModify, stopFetchWishModify }
