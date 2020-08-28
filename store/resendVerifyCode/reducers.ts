import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/resendVerifyCode/state'
import { initialState } from './initialState'
import { ResendVerifyCodeRspData } from '@/types/apis/resendVerifyCode'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchResendVerifyCodeSuccess: CaseReducer<State, PayloadAction<ResendVerifyCodeRspData>> = (state) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
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
