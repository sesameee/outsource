import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { BreezeDailyActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { BreezeDailyDataList } from '@/types/apis/breezeDaily'
import { CATALOG } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(BreezeDailyActions.reset())
        }),
    )

export const fetchBreezeDailyListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(BreezeDailyActions.fetchBreezeDailyList),
        switchMap(() =>
            HttpService.PostAsync<null, BreezeDailyDataList>(CATALOG).pipe(
                mergeMap((res) => {
                    return of(BreezeDailyActions.fetchBreezeDailyListSuccess({ breezeDaily: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(BreezeDailyActions.fetchBreezeDailyListFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(BreezeDailyActions.stopFetchBreezeDailyList)),
            ),
        ),
    )

export default [initEpic, fetchBreezeDailyListEpic]
