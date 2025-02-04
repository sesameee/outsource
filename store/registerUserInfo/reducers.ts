import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/registerUserInfo/state'
import { initialState } from './initialState'
import { RegisterUserInfoRspData } from '@/types/apis/registerUserInfo'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchRegisterUserInfoSuccess: CaseReducer<State, PayloadAction<RegisterUserInfoRspData>> = (state) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
    })
}

export const fetchRegisterUserInfoFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
