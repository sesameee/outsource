import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/shoppingCartList/state'
import { initialState } from './initialState'
import { ShoppingCartListRspData } from '@/types/apis/shoppingCartList'
import { setCookie } from '@/utils'
import { Base64 } from 'js-base64'
export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const setShoppingCartListCookie: CaseReducer<State, PayloadAction<{ data: any }>> = (state, action) => {
    return produce(state, (draft) => {
        if (typeof action.payload.data == 'string') {
            draft['shoppingCartListDataCookie'] = [...JSON.parse(Base64.decode(action.payload.data))]
        } else {
            draft['shoppingCartListDataCookie'] = [...action.payload.data]
        }
        action.payload.data && setCookie('cartList', Base64.encode(JSON.stringify(draft['shoppingCartListDataCookie'])))
    })
}

export const setPromoCode: CaseReducer<State, PayloadAction<{ promoCode: string }>> = (state, action) => {
    return produce(state, (draft) => {
        action.payload.promoCode && setCookie('promoCode', action.payload.promoCode)
        draft['promoCode'] = action.payload.promoCode
    })
}

export const fetchShoppingCartListSuccess: CaseReducer<State, PayloadAction<{ data: ShoppingCartListRspData }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['shoppingCartListData'] = action.payload.data.data
    })
}

export const fetchShoppingCartListFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
