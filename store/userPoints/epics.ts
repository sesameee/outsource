import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { UserPointsActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserPointsReqData, UserPointsRspData } from '@/types/apis/userPoints'
import { USER_POINTS } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(UserPointsActions.reset())
        }),
    )

export const fetchUserPointsEpic: Epic = (action$) =>
    action$.pipe(
        ofType(UserPointsActions.fetchUserPoints),
        mergeMap((action: PayloadAction<UserPointsReqData>) =>
            HttpService.PostAsync<UserPointsReqData, UserPointsRspData>(USER_POINTS, {
                memberId: action.payload.memberId,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(UserPointsActions.fetchUserPointsSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(UserPointsActions.fetchUserPointsFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(UserPointsActions.stopFetchUserPoints)),
            ),
        ),
    )

export default [initEpic, fetchUserPointsEpic]