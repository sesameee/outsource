import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/addressInfo/state'
import { initialState } from './initialState'
import { AddressInfoRspData } from '@/types/apis/addressInfo'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchAddressInfoSuccess: CaseReducer<State, PayloadAction<{ addressInfo: AddressInfoRspData }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['addressInfoList'] = action.payload.addressInfo.data
    })
}

export const fetchAddressInfoFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
