import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/breezeDaily/actions'

export const breezeDailySlice = createSlice({
    name: 'breezeDaily',
    initialState: initialState,
    reducers: {
        fetchBreezeDailySuccess: reducers.fetchBreezeDailySuccess,
        fetchBreezeDailyFailure: reducers.fetchBreezeDailyFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchBreezeDaily = createAction(types.FETCH_BREEZEDAILY)
const stopFetchBreezeDaily = createAction(types.STOP_FETCH_BREEZEDAILY)

export const breezeDailyCreateActions = { fetchBreezeDaily, stopFetchBreezeDaily }
