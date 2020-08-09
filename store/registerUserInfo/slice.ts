import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/registerUserInfo/actions'
import { RegisterUserInfoReqData } from '@/types/apis/registerUserInfo'

export const registerUserInfoSlice = createSlice({
    name: 'registerUserInfo',
    initialState: initialState,
    reducers: {
        fetchRegisterUserInfoSuccess: reducers.fetchRegisterUserInfoSuccess,
        fetchRegisterUserInfoFailure: reducers.fetchRegisterUserInfoFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchRegisterUserInfo = createAction<RegisterUserInfoReqData>(types.FETCH_REGISTER_USER_INFO)
const stopFetchRegisterUserInfo = createAction(types.STOP_FETCH_REGISTER_USER_INFO)

export const registerUserInfoCreateActions = { fetchRegisterUserInfo, stopFetchRegisterUserInfo }
