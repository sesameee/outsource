import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/addressInfo/actions'

export const addressInfoSlice = createSlice({
    name: 'addressInfo',
    initialState: initialState,
    reducers: {
        fetchAddressInfoSuccess: reducers.fetchAddressInfoSuccess,
        fetchAddressInfoFailure: reducers.fetchAddressInfoFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchAddressInfo = createAction(types.FETCH_ADDRESS_INFO)
const stopFetchAddressInfo = createAction(types.STOP_FETCH_ADDRESS_INFO)

export const addressInfoCreateActions = { fetchAddressInfo, stopFetchAddressInfo }
