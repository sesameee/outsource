import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { UserSetupActions, UserDataActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserSetupReqData, UserSetupRspData } from '@/types/apis/userSetup'
import { USER_SETUP } from '@/services/api/apiConfig'
import { epicAuthFailMiddleware, requireValidToken, epicSuccessMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(UserSetupActions.reset())
//         }),
//     )

export const fetchUserSetupEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(UserSetupActions.fetchUserSetup),
        switchMap((action: PayloadAction<UserSetupReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<UserSetupReqData, UserSetupRspData>(USER_SETUP, {
                    ...action.payload,
                    memberId: state$.value.userLogin.memberId,
                    email: action.payload.email,
                    cityCode: action.payload.cityCode,
                    areaCode: action.payload.areaCode,
                    address: action.payload.address,
                    accessToken: accessToken,
                }).pipe(
                    switchMap((res) => {
                        return epicSuccessMiddleware(
                            res,
                            [
                                UserSetupActions.fetchUserSetupSuccess(res.data),
                                UserDataActions.fetchUserData({ memberId: '', accessToken: '' }),
                            ],
                            true,
                        )
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            UserSetupActions.fetchUserSetupFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(UserSetupActions.stopFetchUserSetup)),
                    take(1),
                ),
            ),
        ),
    )

export default [fetchUserSetupEpic]
