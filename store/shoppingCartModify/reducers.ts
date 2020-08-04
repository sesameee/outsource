import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/shoppingCartModify/state'
import { initialState } from './initialState'
import { ShoppingCartModifyRspData } from '@/types/apis/shoppingCartModify'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchShoppingCartModifySuccess: CaseReducer<State, PayloadAction<ShoppingCartModifyRspData>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['message'] = action.payload.message
    })
}

export const fetchShoppingCartModifyFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
