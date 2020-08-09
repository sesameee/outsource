import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/userRegister/state'
import { initialState } from './initialState'
import { UserRegisterRspData } from '@/types/apis/userRegister'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchUserRegisterSuccess: CaseReducer<State, PayloadAction<UserRegisterRspData>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['data'] = action.payload.data
    })
}

export const fetchUserRegisterFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
