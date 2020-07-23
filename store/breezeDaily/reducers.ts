import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/breezeDaily/state'
import { initialState } from './initialState'
import { breezeDailyList } from '@/types/apis/breezeDaily'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchBreezeDailySuccess: CaseReducer<State, PayloadAction<{ breezeDailyList: breezeDailyList }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['breezeDailyList'] = action.payload.breezeDailyList.data
    })
}

export const fetchBreezeDailyFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
