import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/forgotPassword/state'
import { initialState } from './initialState'
import { ForgotPasswordRspData } from '@/types/apis/forgotPassword'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchForgotPasswordSuccess: CaseReducer<State, PayloadAction<ForgotPasswordRspData>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['data'] = action.payload.data
    })
}

export const fetchForgotPasswordFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
