import { of } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { RefundReasonActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { RefundReasonRspData } from '@/types/apis/refundReason'
import { REFUND_REASON } from '@/services/api/apiConfig'
import { epicSuccessMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(RefundReasonActions.reset())
//         }),
//     )

export const fetchRefundReasonEpic: Epic = (action$) =>
    action$.pipe(
        ofType(RefundReasonActions.fetchRefundReason),
        switchMap(() =>
            HttpService.PostAsync<null, RefundReasonRspData>(REFUND_REASON).pipe(
                switchMap((res) => {
                    return epicSuccessMiddleware(res, [
                        RefundReasonActions.fetchRefundReasonSuccess({ refundReasonRspData: res.data }),
                    ])
                }),
                catchError((error: AxiosError) => {
                    return of(RefundReasonActions.fetchRefundReasonFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(RefundReasonActions.stopFetchRefundReason)),
                take(1),
            ),
        ),
    )

export default [fetchRefundReasonEpic]
