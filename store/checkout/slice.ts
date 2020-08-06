import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/checkout/actions'
import { CheckoutReqData } from '@/types/apis/checkout'

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: initialState,
    reducers: {
        fetchCheckoutSuccess: reducers.fetchCheckoutSuccess,
        fetchCheckoutFailure: reducers.fetchCheckoutFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchCheckout = createAction<CheckoutReqData>(types.FETCH_CHECKOUT)
const stopFetchCheckout = createAction(types.STOP_FETCH_CHECKOUT)

export const checkoutCreateActions = { fetchCheckout, stopFetchCheckout }
