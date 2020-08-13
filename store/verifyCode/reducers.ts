import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/verifyCode/state'
import { initialState } from './initialState'
import { VerifyCodeRspData } from '@/types/apis/verifyCode'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchVerifyCodeSuccess: CaseReducer<State, PayloadAction<VerifyCodeRspData >> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['data'] = action.payload.data
    })
}

export const fetchVerifyCodeFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
