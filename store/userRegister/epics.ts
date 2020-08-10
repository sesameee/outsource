import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { UserRegisterActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserRegisterReqData, UserRegisterRspData } from '@/types/apis/userRegister'
import { USER_REGISTER } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(UserRegisterActions.reset())
        }),
    )

export const fetchUserRegisterEpic: Epic = (action$) =>
    action$.pipe(
        ofType(UserRegisterActions.fetchUserRegister),
        mergeMap((action: PayloadAction<UserRegisterReqData>) =>
            HttpService.PostAsync<UserRegisterReqData, UserRegisterRspData>(USER_REGISTER, {
                name: action.payload.name,
                phoneCode: action.payload.phoneCode,
                phone: action.payload.phone,
                email: action.payload.email,
                pwd1: action.payload.pwd1,
                pwd2: action.payload.pwd2,
                registerFrom: action.payload.registerFrom,
            }).pipe(
                mergeMap((res) => {
                    return of(UserRegisterActions.fetchUserRegisterSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(UserRegisterActions.fetchUserRegisterFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(UserRegisterActions.stopFetchUserRegister)),
            ),
        ),
    )

export default [initEpic, fetchUserRegisterEpic]