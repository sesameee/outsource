import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/generateAccessToken/state'
import { initialState } from './initialState'
import { GenerateAccessTokenRspData } from '@/types/apis/generateAccessToken'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchGenerateAccessTokenSuccess: CaseReducer<
    State,
    PayloadAction<{ generateAccessTokenRspData: GenerateAccessTokenRspData }>
> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['data'] = action.payload.generateAccessTokenRspData.data
    })
}

export const fetchGenerateAccessTokenFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
