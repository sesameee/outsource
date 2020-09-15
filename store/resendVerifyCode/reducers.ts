import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/resendVerifyCode/state'
import { initialState } from './initialState'
import { ResendVerifyCodeRspData } from '@/types/apis/resendVerifyCode'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
        draft['success'] = false
    })
}

export const fetchResendVerifyCodeSuccess: CaseReducer<State, PayloadAction<ResendVerifyCodeRspData>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['success'] = action.payload.code === '0000'
    })
}

export const fetchResendVerifyCodeFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
