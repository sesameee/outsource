import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/banner/state'
import { initialState } from './initialState'
import { bannerList } from '@/types/apis/banner'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchBannerSuccess: CaseReducer<State, PayloadAction<{ bannerList: bannerList }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['bannerList'] = action.payload.bannerList.data
    })
}

export const fetchBannerFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
