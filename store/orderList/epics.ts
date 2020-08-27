import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil, retry } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { OrderListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { OrderListReqData, OrderListRspData } from '@/types/apis/orderList'
import { ORDER_LIST } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(OrderListActions.reset())
        }),
    )

export const fetchOrderListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(OrderListActions.fetchOrderList),
        mergeMap((action: PayloadAction<OrderListReqData>) =>
            HttpService.PostAsync<OrderListReqData, OrderListRspData>(ORDER_LIST, {
                memberId: state$.value.userLogin.memberId,
                days: action.payload.days,
                payType: action.payload.payType,
                accessToken: state$.value.userLogin.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(res, OrderListActions.fetchOrderListSuccess(res.data))
                }),
                catchError((error: AxiosError | string) => {
                    const res = <AxiosError>error
                    return epicAuthFailMiddleware(error, OrderListActions.fetchOrderListFailure({ error: res.message }))
                }),
                retry(2),
                takeUntil(action$.ofType(OrderListActions.stopFetchOrderList)),
            ),
        ),
    )

export default [initEpic, fetchOrderListEpic]
