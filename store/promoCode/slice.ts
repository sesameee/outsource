import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/promoCode/actions'
import { PromoCodeReqData } from '@/types/apis/promoCode'

export const promoCodeSlice = createSlice({
    name: 'promoCode',
    initialState: initialState,
    reducers: {
        fetchPromoCodeSuccess: reducers.fetchPromoCodeSuccess,
        fetchPromoCodeFailure: reducers.fetchPromoCodeFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchPromoCode = createAction<PromoCodeReqData>(types.FETCH_PROMOCODE)
const stopFetchPromoCode = createAction(types.STOP_FETCH_PROMOCODE)

export const promoCodeCreateActions = { fetchPromoCode, stopFetchPromoCode }
