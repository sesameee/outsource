import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/promoCode/state'
import { initialState } from './initialState'
import { PromoCodeRspData } from '@/types/apis/promoCode'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchPromoCodeSuccess: CaseReducer<State, PayloadAction<PromoCodeRspData>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['name'] = action.payload.name
        draft['discountPercent'] = action.payload.discountPercent
        draft['discountRate'] = action.payload.discountRate
        draft['data'] = action.payload.data
    })
}

export const fetchPromoCodeFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
