import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/userLogin/state'
import { initialState } from './initialState'
import { setCookie, deleteCookie } from '@/utils'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
        draft['error'] = ''
    })
}

export const fetchUserLoginSuccess: CaseReducer<State, PayloadAction<{ UserLoginData: any }>> = (state, action) => {
    return produce(state, (draft) => {
        const { memberId, accessToken, accessTokenExpireDate, userId, token, uuid } = action.payload.UserLoginData.data
        draft['isFetch'] = false
        draft['error'] = ''
        uuid && (draft['uuid'] = uuid) && setCookie('uuid', uuid)
        memberId && (draft['memberId'] = memberId) && setCookie('memberId', memberId)
        accessToken && (draft['accessToken'] = accessToken) && setCookie('accessToken', accessToken)
        accessTokenExpireDate && (draft['accessTokenExpireDate'] = accessTokenExpireDate)
        userId && (draft['userId'] = userId) && setCookie('userId', userId)
        token && (draft['token'] = token) && setCookie('token', token)
    })
}

export const fetchUserLoginFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        console.log('fetchUserLoginFailure SSSS:>> ')
        draft['isFetch'] = false
        draft['error'] = action.payload.error
        if (action.payload.error == '8013') {
            return
        }
        deleteCookie('memberId')
        deleteCookie('userId')
        deleteCookie('accessToken')
        deleteCookie('token')
        deleteCookie('uuid')
        //window.location.href = '/'
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
