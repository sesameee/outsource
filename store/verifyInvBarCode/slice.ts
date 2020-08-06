import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/verifyInvBarCode/actions'
import { VerifyInvBarCodeReqData } from '@/types/apis/verifyInvBarCode'

export const verifyInvBarCodeSlice = createSlice({
    name: 'verifyInvBarCode',
    initialState: initialState,
    reducers: {
        fetchVerifyInvBarCodeSuccess: reducers.fetchVerifyInvBarCodeSuccess,
        fetchVerifyInvBarCodeFailure: reducers.fetchVerifyInvBarCodeFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchVerifyInvBarCode = createAction<VerifyInvBarCodeReqData>(types.FETCH_VERIFY_INV_BARCODE)
const stopFetchVerifyInvBarCode = createAction(types.STOP_FETCH_VERIFY_INV_BARCODE)

export const verifyInvBarCodeCreateActions = { fetchVerifyInvBarCode, stopFetchVerifyInvBarCode }
