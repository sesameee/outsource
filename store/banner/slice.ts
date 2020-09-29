import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/banner/actions'

export const bannerSlice = createSlice({
    name: 'banner',
    initialState: initialState,
    reducers: {
        fetchBannerSuccess: reducers.fetchBannerSuccess,
        fetchBannerFailure: reducers.fetchBannerFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchBanner = createAction<{ isRecommend: number }>(types.FETCH_BANNER)
const stopFetchBanner = createAction(types.STOP_FETCH_BANNER)

const fetchRecommend = createAction<{ isRecommend: number }>(types.FETCH_RECOMMEND)
const stopFetchRecommend = createAction(types.STOP_FETCH_RECOMMEND)

export const bannerCreateActions = { fetchBanner, stopFetchBanner, fetchRecommend, stopFetchRecommend }
