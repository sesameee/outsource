import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/channelList/state'
import { initialState } from './initialState'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchChannelListSuccess: CaseReducer<State, PayloadAction<{ channelList: any }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['channelList'] = action.payload.channelList.data
    })
}

export const fetchChannelListFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
