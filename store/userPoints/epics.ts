import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { UserPointsActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserPointsReqData, UserPointsRspData } from '@/types/apis/userPoints'
import { USER_POINTS } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(UserPointsActions.reset())
        }),
    )

export const fetchUserPointsEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(UserPointsActions.fetchUserPoints),
        switchMap(() =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<UserPointsReqData, UserPointsRspData>(USER_POINTS, {
                    memberId: state$.value.userLogin.memberId,
                    accessToken: accessToken,
                }).pipe(
                    mergeMap((res) => {
                        return epicSuccessMiddleware(res, [UserPointsActions.fetchUserPointsSuccess(res.data)])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            UserPointsActions.fetchUserPointsFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(UserPointsActions.stopFetchUserPoints)),
                ),
            ),
        ),
    )

export default [initEpic, fetchUserPointsEpic]
