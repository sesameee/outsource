import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/memberAddressInfo/actions'
import { MemberAddressInfoReqData } from '@/types/apis/memberAddressInfo'

export const memberAddressInfoSlice = createSlice({
    name: 'memberAddressInfo',
    initialState: initialState,
    reducers: {
        fetchMemberAddressInfoSuccess: reducers.fetchMemberAddressInfoSuccess,
        fetchMemberAddressInfoFailure: reducers.fetchMemberAddressInfoFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchMemberAddressInfo = createAction<MemberAddressInfoReqData>(types.FETCH_MEMBERADDRESSINFO)
const stopFetchMemberAddressInfo = createAction(types.STOP_FETCH_MEMBERADDRESSINFO)

export const memberAddressInfoCreateActions = { fetchMemberAddressInfo, stopFetchMemberAddressInfo }
