import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/productInfo/state'
import { initialState } from './initialState'
import { ProductInfoRspData } from '@/types/apis/productInfo'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchProductInfoSuccess: CaseReducer<State, PayloadAction<{ ProductInfoData: ProductInfoRspData }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['productInfoData'] = action.payload.ProductInfoData.data
    })
}

export const fetchProductInfoFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
