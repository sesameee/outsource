import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { UserDataActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { userDataReqData, userDataRspData } from '@/types/apis/userData'
import { USER_DATA } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, requireValidToken, epicAuthFailMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(UserDataActions.reset())
        }),
    )

export const fetchUserDataEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(UserDataActions.fetchUserData),
        switchMap(() =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<userDataReqData, userDataRspData>(USER_DATA, {
                    memberId: state$.value.userLogin.memberId,
                    accessToken: accessToken,
                }).pipe(
                    mergeMap((res) => {
                        return epicSuccessMiddleware(res, [UserDataActions.fetchUserDataSuccess(res.data)])
                    }),
                    catchError((error: AxiosError) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(
                            error,
                            UserDataActions.fetchUserDataFailure({ error: res.message }),
                        )
                    }),
                    takeUntil(action$.ofType(UserDataActions.stopFetchUserData)),
                ),
            ),
        ),
    )

export default [initEpic, fetchUserDataEpic]
