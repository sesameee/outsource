import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { RefundActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { RefundReqData, RefundRspData } from '@/types/apis/refund'
import { REFUND } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(RefundActions.reset())
        }),
    )

export const fetchRefundEpic: Epic = (action$) =>
    action$.pipe(
        ofType(RefundActions.fetchRefund),
        mergeMap((action: PayloadAction<RefundReqData>) =>
            HttpService.PostAsync<RefundReqData, RefundRspData>(REFUND, {
                memberId: action.payload.memberId,
                cid: action.payload.cid,
                pid: action.payload.pid,
                spec1: action.payload.spec1,
                spec2: action.payload.spec2,
                qty: action.payload.qty,
                reason: action.payload.reason,
                memo: action.payload.memo,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(RefundActions.fetchRefundSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(RefundActions.fetchRefundFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(RefundActions.stopFetchRefund)),
            ),
        ),
    )

export default [initEpic, fetchRefundEpic]
