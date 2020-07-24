import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/channelList/actions'

export const channelListSlice = createSlice({
    name: 'channelList',
    initialState: initialState,
    reducers: {
        fetchChannelListSuccess: reducers.fetchChannelListSuccess,
        fetchChannelListFailure: reducers.fetchChannelListFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchChannelList = createAction(types.FETCH_CHANNLLIST)
const stopFetchChannelList = createAction(types.STOP_FETCH_CHANNLLIST)

export const channelListCreateActions = { fetchChannelList, stopFetchChannelList }
