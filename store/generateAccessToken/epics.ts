import { HYDRATE } from 'next-redux-wrapper'
import { of, throwError, empty } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil, retry } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { GenerateAccessTokenActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { GenerateAccessTokenRspData } from '@/types/apis/generateAccessToken'
import { GENERATE_ACCESS_TOKEN } from '@/services/api/apiConfig'
import * as types from '@/store/actionsType'

const NEED_GETREFRESH_ERROR_CODE = '8012'
const NEED_LOGOUT_ERROR_CODE = '8011'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(GenerateAccessTokenActions.reset())
        }),
    )

export const fetchGenerateAccessTokenListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(GenerateAccessTokenActions.fetchGenerateAccessToken),
        switchMap(() =>
            HttpService.PostAsync<null, GenerateAccessTokenRspData>(GENERATE_ACCESS_TOKEN).pipe(
                mergeMap((res) => {
                    if (res.data.code === NEED_GETREFRESH_ERROR_CODE) {
                        // token 失效需要refresh token
                        return throwError(res.data.code)
                    } else if (res.data.code === NEED_LOGOUT_ERROR_CODE) {
                        // token 無效登出
                        return empty
                    } else {
                        return of(
                            GenerateAccessTokenActions.fetchGenerateAccessTokenSuccess({
                                generateAccessTokenRspData: res.data,
                            }),
                        )
                    }
                }),
                catchError((error: AxiosError | string) => {
                    if (error === NEED_GETREFRESH_ERROR_CODE) {
                        return of({
                            type: types.FETCH_REFRESH_TOKEN,
                        })
                    }
                    const res = <AxiosError>error
                    return of(GenerateAccessTokenActions.fetchGenerateAccessTokenFailure({ error: res.message }))
                }),
                retry(1),
                takeUntil(action$.ofType(GenerateAccessTokenActions.stopFetchGenerateAccessToken)),
            ),
        ),
    )

export default [initEpic, fetchGenerateAccessTokenListEpic]
