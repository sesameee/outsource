import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/breezeDaily/actions'

export const breezeDailySlice = createSlice({
    name: 'breezeDaily',
    initialState: initialState,
    reducers: {
        fetchBreezeDailyListSuccess: reducers.fetchBreezeDailyListSuccess,
        fetchBreezeDailyListFailure: reducers.fetchBreezeDailyListFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchBreezeDailyList = createAction(types.FETCH_BREEZE_DAILY)
const stopFetchBreezeDailyList = createAction(types.STOP_FETCH_BREEZE_DAILY)

export const breezeDailyCreateActions = { fetchBreezeDailyList, stopFetchBreezeDailyList }
