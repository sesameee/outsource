import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/userPoints/actions'
import { UserPointsReqData } from '@/types/apis/userPoints'

export const userPointsSlice = createSlice({
    name: 'userPoints',
    initialState: initialState,
    reducers: {
        fetchUserPointsSuccess: reducers.fetchUserPointsSuccess,
        fetchUserPointsFailure: reducers.fetchUserPointsFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchUserPoints = createAction<UserPointsReqData>(types.FETCH_USER_POINTS)
const stopFetchUserPoints = createAction(types.STOP_FETCH_USER_POINTS)

export const userPointsCreateActions = { fetchUserPoints, stopFetchUserPoints }
