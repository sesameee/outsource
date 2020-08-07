import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { CheckoutActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { CheckoutReqData, CheckoutRspData } from '@/types/apis/checkout'
import { CHECKOUT } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(CheckoutActions.reset())
        }),
    )

export const fetchCheckoutEpic: Epic = (action$) =>
    action$.pipe(
        ofType(CheckoutActions.fetchCheckout),
        mergeMap((action: PayloadAction<CheckoutReqData>) =>
            HttpService.PostAsync<CheckoutReqData, CheckoutRspData>(CHECKOUT, {
                memberId: action.payload.memberId,
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
            }).pipe(
                mergeMap((res) => {
                    return of(CheckoutActions.fetchCheckoutSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(CheckoutActions.fetchCheckoutFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(CheckoutActions.stopFetchCheckout)),
            ),
        ),
    )

export default [initEpic, fetchCheckoutEpic]