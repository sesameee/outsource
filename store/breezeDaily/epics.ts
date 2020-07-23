import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { BreezeDailyActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { breezeDailyList } from '@/types/apis/breezeDaily'
import { BREEZE_DAILY } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(BreezeDailyActions.reset())
        }),
    )

export const fetchbreezeDailyEpic: Epic = (action$) =>
    action$.pipe(
        ofType(BreezeDailyActions.fetchBreezeDaily),
        switchMap((action: PayloadAction) =>
            HttpService.PostAsync<null, breezeDailyList>(BREEZE_DAILY).pipe(
                mergeMap((res) => {
                    return of(BreezeDailyActions.fetchBreezeDailySuccess({ breezeDailyList: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(BreezeDailyActions.fetchBreezeDailyFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(BreezeDailyActions.stopFetchBreezeDaily)),
            ),
        ),
    )

export default [initEpic, fetchbreezeDailyEpic]
