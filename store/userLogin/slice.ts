import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/userLogin/actions'
import { UserLoginReqData } from '@/types/apis/userLogin'

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: initialState,
    reducers: {
        fetchUserLoginSuccess: reducers.fetchUserLoginSuccess,
        fetchUserLoginFailure: reducers.fetchUserLoginFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchUserLogin = createAction<UserLoginReqData>(types.FETCH_USERLOGIN)
const stopFetchUserLogin = createAction(types.STOP_FETCH_USERLOGIN)

export const userLoginCreateActions = { fetchUserLogin, stopFetchUserLogin }
