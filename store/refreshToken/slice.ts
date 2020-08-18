import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/refreshToken/actions'

export const refreshTokenSlice = createSlice({
    name: 'refreshToken',
    initialState: initialState,
    reducers: {
        fetchRefreshTokenSuccess: reducers.fetchRefreshTokenSuccess,
        fetchRefreshTokenFailure: reducers.fetchRefreshTokenFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchRefreshToken = createAction(types.FETCH_REFRESH_TOKEN)
const stopFetchRefreshToken = createAction(types.STOP_FETCH_REFRESH_TOKEN)

export const refreshTokenCreateActions = {
    fetchRefreshToken: fetchRefreshToken,
    stopFetchRefreshToken: stopFetchRefreshToken,
}
