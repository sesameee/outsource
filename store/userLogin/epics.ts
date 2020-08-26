import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { UserLoginActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserLoginReqData, UserLoginRspAllData } from '@/types/apis/userLogin'
import { USER_LOGIN } from '@/services/api/apiConfig'
import { epicSuccessMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap((action) => {
            const userLogin = action.payload.userLogin
            return of(
                UserLoginActions.fetchUserLoginSuccess({
                    UserLoginData: {
                        data: userLogin,
                        code: '0000',
                        message: '',
                    },
                }),
            )
        }),
    )

export const fetchUserLoginEpic: Epic = (action$) =>
    action$.pipe(
        ofType(UserLoginActions.fetchUserLogin),
        mergeMap((action: PayloadAction<UserLoginReqData>) =>
            HttpService.PostAsync<UserLoginReqData, UserLoginRspAllData>(USER_LOGIN, {
                phoneCode: action.payload.phoneCode,
                phone: action.payload.phone,
                password: action.payload.password,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(
                        res,
                        UserLoginActions.fetchUserLoginSuccess({
                            UserLoginData: res.data,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(UserLoginActions.fetchUserLoginFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(UserLoginActions.stopFetchUserLogin)),
            ),
        ),
    )

export default [initEpic, fetchUserLoginEpic]
