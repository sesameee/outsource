import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/verifyInvBarCode/state'
import { initialState } from './initialState'
import { VerifyInvBarCodeRspData } from '@/types/apis/verifyInvBarCode'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchVerifyInvBarCodeSuccess: CaseReducer<State, PayloadAction<VerifyInvBarCodeRspData >> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['message'] = action.payload.message
    })
}

export const fetchVerifyInvBarCodeFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
