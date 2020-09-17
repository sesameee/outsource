import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/userData/actions'
import { userDataReqData } from '@/types/apis/userData'

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialState,
    reducers: {
        fetchUserDataSuccess: reducers.fetchUserDataSuccess,
        fetchUserDataFailure: reducers.fetchUserDataFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchUserData = createAction<userDataReqData>(types.FETCH_USERDATA)
const stopFetchUserData = createAction(types.STOP_FETCH_USERDATA)

export const userDataCreateActions = { fetchUserData, stopFetchUserData }
