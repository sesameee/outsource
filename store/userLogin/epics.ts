import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { UserLoginActions, ErrorAlertActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserLoginReqData, UserLoginRspAllData } from '@/types/apis/userLogin'
import { USER_LOGIN } from '@/services/api/apiConfig'
import { epicSuccessMiddleware } from '../epicMiddleware'
import { v4 as uuidv4 } from 'uuid'
import { setCookie } from '@/utils'
import { i18n } from '@/I18n'
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

export const fetchUserLoginEpic: Epic = (action$) => {
    return action$.pipe(
        ofType(UserLoginActions.fetchUserLogin),
        switchMap((action: PayloadAction<UserLoginReqData>) => {
            const uuid = uuidv4()
            setCookie('uuid', uuid)
            return HttpService.PostAsync<UserLoginReqData, UserLoginRspAllData>(
                USER_LOGIN,
                {
                    phoneCode: action.payload.phoneCode,
                    phone: action.payload.phone,
                    password: action.payload.password,
                },
                undefined,
                {
                    headers: {
                        uuid: uuid,
                    },
                },
            ).pipe(
                switchMap((res) => {
                    if (res.data.code !== '3004') {
                        return epicSuccessMiddleware(res, [
                            UserLoginActions.fetchUserLoginSuccess({
                                UserLoginData: res.data,
                                isLogin: true,
                            }),
                        ])
                    }
                    return of(
                        UserLoginActions.fetchUserLoginSuccess({
                            UserLoginData: res.data,
                            isLogin: true,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(
                        UserLoginActions.fetchUserLoginFailure({ error: error.message }),
                        ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: i18n.t('logout') }),
                    )
                }),
                takeUntil(action$.ofType(UserLoginActions.stopFetchUserLogin)),
                take(1),
            )
        }),
    )
}

export default [initEpic, fetchUserLoginEpic]
