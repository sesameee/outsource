import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/resendVerifyCode/actions'
import { ResendVerifyCodeReqData } from '@/types/apis/resendVerifyCode'

export const resendVerifyCodeSlice = createSlice({
    name: 'resendVerifyCode',
    initialState: initialState,
    reducers: {
        fetchResendVerifyCodeSuccess: reducers.fetchResendVerifyCodeSuccess,
        fetchResendVerifyCodeFailure: reducers.fetchResendVerifyCodeFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchResendVerifyCode = createAction<ResendVerifyCodeReqData>(types.FETCH_RESEND_VERIFY_CODE)
const stopFetchResendVerifyCode = createAction(types.STOP_FETCH_RESEND_VERIFY_CODE)

export const resendVerifyCodeCreateActions = { fetchResendVerifyCode, stopFetchResendVerifyCode }
