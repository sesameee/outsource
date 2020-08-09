import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/userSetup/actions'
import { UserSetupReqData } from '@/types/apis/userSetup'

export const userSetupSlice = createSlice({
    name: 'userSetup',
    initialState: initialState,
    reducers: {
        fetchUserSetupSuccess: reducers.fetchUserSetupSuccess,
        fetchUserSetupFailure: reducers.fetchUserSetupFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchUserSetup = createAction<UserSetupReqData>(types.FETCH_USER_SETUP)
const stopFetchUserSetup = createAction(types.STOP_FETCH_USER_SETUP)

export const userSetupCreateActions = { fetchUserSetup, stopFetchUserSetup }
