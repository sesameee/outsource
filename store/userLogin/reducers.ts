import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/userLogin/state'
import { initialState } from './initialState'
import { UserLoginRspAllData } from '@/types/apis/userLogin'
import { setCookie, deleteCookie } from '@/utils'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
        draft['error'] = ''
    })
}

export const fetchUserLoginSuccess: CaseReducer<State, PayloadAction<{ UserLoginData: UserLoginRspAllData }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['userLoginData'] = action.payload.UserLoginData.data

        setCookie('accessToken', draft['userLoginData'].accessToken)
        setCookie('token', draft['userLoginData'].token)
    })
}

export const fetchUserLoginFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
        deleteCookie('accessToken')
        deleteCookie('token')
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
