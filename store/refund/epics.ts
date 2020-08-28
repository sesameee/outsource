import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil, retry } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { RefundActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { RefundReqData, RefundRspData } from '@/types/apis/refund'
import { REFUND } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(RefundActions.reset())
        }),
    )

export const fetchRefundEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(RefundActions.fetchRefund),
        mergeMap((action: PayloadAction<RefundReqData>) =>
            HttpService.PostAsync<RefundReqData, RefundRspData>(REFUND, {
                memberId: state$.value.userLogin.memberId,
                reason: action.payload.reason,
                memo: action.payload.memo,
                accessToken: state$.value.userLogin.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(res, RefundActions.fetchRefundSuccess(res.data))
                }),
                catchError((error: AxiosError | string) => {
                    const res = <AxiosError>error
                    return epicAuthFailMiddleware(error, RefundActions.fetchRefundFailure({ error: res.message }))
                }),
                retry(2),
                takeUntil(action$.ofType(RefundActions.stopFetchRefund)),
            ),
        ),
    )

export default [initEpic, fetchRefundEpic]
