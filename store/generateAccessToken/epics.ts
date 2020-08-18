import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { GenerateAccessTokenActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { GenerateAccessTokenRspData } from '@/types/apis/generateAccessToken'
import { GENERATE_ACCESS_TOKEN } from '@/services/api/apiConfig'

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
                    return of(
                        GenerateAccessTokenActions.fetchGenerateAccessTokenSuccess({
                            generateAccessTokenRspData: res.data,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(GenerateAccessTokenActions.fetchGenerateAccessTokenFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(GenerateAccessTokenActions.stopFetchGenerateAccessToken)),
            ),
        ),
    )

export default [initEpic, fetchGenerateAccessTokenListEpic]
