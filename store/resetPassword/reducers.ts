import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/resetPassword/state'
import { initialState } from './initialState'
import { ResetPasswordRspData } from '@/types/apis/resetPassword'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchResetPasswordSuccess: CaseReducer<State, PayloadAction<ResetPasswordRspData>> = (state) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
    })
}

export const fetchResetPasswordFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
