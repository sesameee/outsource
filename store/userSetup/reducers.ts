import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/userSetup/state'
import { initialState } from './initialState'
import { UserSetupRspData } from '@/types/apis/userSetup'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchUserSetupSuccess: CaseReducer<State, PayloadAction<UserSetupRspData>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['code'] = action.payload.code
    })
}

export const fetchUserSetupFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
