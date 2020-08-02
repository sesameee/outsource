import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/userLogin/state'
import { initialState } from './initialState'
import { UserLoginRspData } from '@/types/apis/userLogin'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
        draft['error'] = ''
    })
}

export const fetchUserLoginSuccess: CaseReducer<State, PayloadAction<{ UserLoginData: UserLoginRspData }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['userLoginData'] = action.payload.UserLoginData
    })
}

export const fetchUserLoginFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
