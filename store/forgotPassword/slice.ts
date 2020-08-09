import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/forgotPassword/actions'
import { ForgotPasswordReqData } from '@/types/apis/forgotPassword'

export const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState: initialState,
    reducers: {
        fetchForgotPasswordSuccess: reducers.fetchForgotPasswordSuccess,
        fetchForgotPasswordFailure: reducers.fetchForgotPasswordFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchForgotPassword = createAction<ForgotPasswordReqData>(types.FETCH_FORGOT_PASSWORD)
const stopFetchForgotPassword = createAction(types.STOP_FETCH_FORGOT_PASSWORD)

export const forgotPasswordCreateActions = { fetchForgotPassword, stopFetchForgotPassword }
