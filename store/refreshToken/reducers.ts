import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/refreshToken/state'
import { initialState } from './initialState'
import { RefreshTokenRspData } from '@/types/apis/refreshToken'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchRefreshTokenSuccess: CaseReducer<
    State,
    PayloadAction<{ refreshTokenRspData: RefreshTokenRspData }>
> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['data'] = action.payload.refreshTokenRspData.data
    })
}

export const fetchRefreshTokenFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
