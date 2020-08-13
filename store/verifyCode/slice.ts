import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/verifyCode/actions'
import { VerifyCodeReqData } from '@/types/apis/verifyCode'

export const verifyCodeSlice = createSlice({
    name: 'verifyCode',
    initialState: initialState,
    reducers: {
        fetchVerifyCodeSuccess: reducers.fetchVerifyCodeSuccess,
        fetchVerifyCodeFailure: reducers.fetchVerifyCodeFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchVerifyCode = createAction<VerifyCodeReqData>(types.FETCH_VERIFY_CODE)
const stopFetchVerifyCode = createAction(types.STOP_FETCH_VERIFY_CODE)

export const verifyCodeCreateActions = { fetchVerifyCode, stopFetchVerifyCode }
