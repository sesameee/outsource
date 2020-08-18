import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/generateAccessToken/actions'

export const generateAccessTokenSlice = createSlice({
    name: 'generateAccessToken',
    initialState: initialState,
    reducers: {
        fetchGenerateAccessTokenSuccess: reducers.fetchGenerateAccessTokenSuccess,
        fetchGenerateAccessTokenFailure: reducers.fetchGenerateAccessTokenFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchGenerateAccessToken = createAction(types.FETCH_GENERATE_ACCESS_TOKEN)
const stopFetchGenerateAccessToken = createAction(types.STOP_FETCH_GENERATE_ACCESS_TOKEN)

export const generateAccessTokenCreateActions = {
    fetchGenerateAccessToken: fetchGenerateAccessToken,
    stopFetchGenerateAccessToken: stopFetchGenerateAccessToken,
}
