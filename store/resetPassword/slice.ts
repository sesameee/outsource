import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/resetPassword/actions'
import { ResetPasswordReqData } from '@/types/apis/resetPassword'

export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: initialState,
    reducers: {
        fetchResetPasswordSuccess: reducers.fetchResetPasswordSuccess,
        fetchResetPasswordFailure: reducers.fetchResetPasswordFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchResetPassword = createAction<ResetPasswordReqData>(types.FETCH_RESET_PASSWORD)
const stopFetchResetPassword = createAction(types.STOP_FETCH_RESET_PASSWORD)

export const resetPasswordCreateActions = { fetchResetPassword, stopFetchResetPassword }
