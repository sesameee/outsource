import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { CheckoutActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { CheckoutReqData, CheckoutRspData } from '@/types/apis/checkout'
import { CHECKOUT } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, requireValidToken, epicAuthFailMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(CheckoutActions.reset())
//         }),
//     )

export const fetchCheckoutEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(CheckoutActions.fetchCheckout),
        switchMap((action: PayloadAction<CheckoutReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<CheckoutReqData, CheckoutRspData>(CHECKOUT, {
                    memberId: state$.value.userLogin.memberId,
                    mid: action.payload.mid,
                    tid: action.payload.tid,
                    payType: action.payload.payType,
                    payload: action.payload.payload,
                    shipInfo: action.payload.shipInfo,
                    invoiceType: action.payload.invoiceType,
                    invoiceInfo: action.payload.invoiceInfo,
                    totalAmount: action.payload.totalAmount,
                    shippingAmount: action.payload.shippingAmount,
                    data: action.payload.data,
                    accessToken: accessToken,
                }).pipe(
                    switchMap((res) => {
                        return epicSuccessMiddleware(res, [CheckoutActions.fetchCheckoutSuccess(res.data)])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            CheckoutActions.fetchCheckoutFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(CheckoutActions.stopFetchCheckout)),
                    take(1),
                ),
            ),
        ),
    )

export default [fetchCheckoutEpic]
