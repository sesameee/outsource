import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/userRegister/actions'
import { UserRegisterReqData } from '@/types/apis/userRegister'

export const userRegisterSlice = createSlice({
    name: 'userRegister',
    initialState: initialState,
    reducers: {
        fetchUserRegisterSuccess: reducers.fetchUserRegisterSuccess,
        fetchUserRegisterFailure: reducers.fetchUserRegisterFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchUserRegister = createAction<UserRegisterReqData>(types.FETCH_USER_REGISTER)
const stopFetchUserRegister = createAction(types.STOP_FETCH_USER_REGISTER)

export const userRegisterCreateActions = { fetchUserRegister, stopFetchUserRegister }
