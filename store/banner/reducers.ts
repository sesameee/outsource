import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/banner/state'
import { initialState } from './initialState'
import { BannerList } from '@/types/apis/banner'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchBannerSuccess: CaseReducer<State, PayloadAction<{ bannerList: BannerList; isRecommend: number }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        if (action.payload.isRecommend == 0) {
            draft['bannerList'] = action.payload.bannerList.data
        }
        if (action.payload.isRecommend == 1) {
            draft['recommendList'] = action.payload.bannerList.data
        }
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
