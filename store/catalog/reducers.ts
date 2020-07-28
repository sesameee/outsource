import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/catalog/state'
import { initialState } from './initialState'
import { catalogList } from '@/types/apis/catalog'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchCatalogSuccess: CaseReducer<State, PayloadAction<{ catalogList: catalogList }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['catalogList'] = action.payload.catalogList.data
    })
}

export const fetchCatalogFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
