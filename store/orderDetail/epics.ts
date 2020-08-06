import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { OrderDetailActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { OrderDetailReqData, OrderDetailRspData } from '@/types/apis/orderDetail'
import { ORDER_DETAIL } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(OrderDetailActions.reset())
        }),
    )

export const fetchOrderDetailEpic: Epic = (action$) =>
    action$.pipe(
        ofType(OrderDetailActions.fetchOrderDetail),
        mergeMap((action: PayloadAction<OrderDetailReqData>) =>
            HttpService.PostAsync<OrderDetailReqData, OrderDetailRspData>(ORDER_DETAIL, {
                memberId: action.payload.memberId,
                transId: action.payload.transId,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(OrderDetailActions.fetchOrderDetailSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(OrderDetailActions.fetchOrderDetailFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(OrderDetailActions.stopFetchOrderDetail)),
            ),
        ),
    )

export default [initEpic, fetchOrderDetailEpic]
