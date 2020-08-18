import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { RefreshTokenActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { RefreshTokenRspData } from '@/types/apis/refreshToken'
import { REFRESH_TOKEN } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(RefreshTokenActions.reset())
        }),
    )

export const fetchRefreshTokenListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(RefreshTokenActions.fetchRefreshToken),
        switchMap(() =>
            HttpService.PostAsync<null, RefreshTokenRspData>(REFRESH_TOKEN).pipe(
                mergeMap((res) => {
                    return of(RefreshTokenActions.fetchRefreshTokenSuccess({ refreshTokenRspData: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(RefreshTokenActions.fetchRefreshTokenFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(RefreshTokenActions.stopFetchRefreshToken)),
            ),
        ),
    )

export default [initEpic, fetchRefreshTokenListEpic]
