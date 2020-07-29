import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/breezeDaily/state'
import { initialState } from './initialState'
import { BreezeDailyDataList } from '@/types/apis/breezeDaily'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchBreezeDailyListSuccess: CaseReducer<State, PayloadAction<{ breezeDaily: BreezeDailyDataList }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['breezeDailyList'] = action.payload.breezeDaily.data
    })
}

export const fetchBreezeDailyListFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
