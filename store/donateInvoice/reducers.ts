import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/donateInvoice/state'
import { initialState } from './initialState'
import { DonateInvoiceRspData } from '@/types/apis/donateInvoice'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchDonateInvoiceSuccess: CaseReducer<State, PayloadAction<{ donateInvoice: DonateInvoiceRspData }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['donateInvoiceList'] = action.payload.donateInvoice.data
    })
}

export const fetchDonateInvoiceFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
