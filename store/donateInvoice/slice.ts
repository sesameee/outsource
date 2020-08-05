import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/donateInvoice/actions'

export const donateInvoiceSlice = createSlice({
    name: 'donateInvoice',
    initialState: initialState,
    reducers: {
        fetchDonateInvoiceSuccess: reducers.fetchDonateInvoiceSuccess,
        fetchDonateInvoiceFailure: reducers.fetchDonateInvoiceFailure,
        setIsFetch: reducers.setIsFetching,
        reset: reducers.reset,
    },
})

const fetchDonateInvoice = createAction(types.FETCH_DONATE_INVOICE)
const stopFetchDonateInvoice = createAction(types.STOP_FETCH_DONATE_INVOICE)

export const donateInvoiceCreateActions = { fetchDonateInvoice, stopFetchDonateInvoice }
