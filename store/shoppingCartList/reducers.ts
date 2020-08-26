import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/shoppingCartList/state'
import { initialState } from './initialState'
import { ShoppingCartListRspData } from '@/types/apis/shoppingCartList'
import { setCookie } from '@/utils'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const setShoppingCartListCookie: CaseReducer<State, PayloadAction<{ data: any }>> = (state, action) => {
    return produce(state, (draft) => {
        if (typeof action.payload.data == 'string') {
            draft['shoppingCartListDataCookie'] = JSON.parse(action.payload.data)
        } else {
            draft['shoppingCartListDataCookie'] = action.payload.data
        }
        action.payload.data && setCookie('cartList', JSON.stringify(draft['shoppingCartListDataCookie']))
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
