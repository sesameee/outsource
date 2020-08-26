import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/wishList/state'
import { initialState } from './initialState'
import { WishListRspData } from '@/types/apis/wishList'
import { Base64 } from 'js-base64'
import { setCookie } from '@/utils'

export const setIsFetching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const setWishListCookie: CaseReducer<State, PayloadAction<any>> = (state, action) => {
    return produce(state, (draft) => {
        if (typeof action.payload.data == 'string') {
            draft['wishListCookie'] = [...JSON.parse(Base64.decode(action.payload.data))]
        } else {
            draft['wishListCookie'] = [...action.payload.data]
        }
        action.payload.data && setCookie('wishList', Base64.encode(JSON.stringify(draft['wishListCookie'])))
    })
}

export const fetchWishListSuccess: CaseReducer<State, PayloadAction<WishListRspData>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['cid'] = action.payload.cid
        draft['name'] = action.payload.name
        draft['categoryType'] = action.payload.categoryType
        draft['total'] = action.payload.total
        draft['data'] = action.payload.data
    })
}

export const fetchWishListFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
