import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { OrderDetailActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { OrderDetailReqData, OrderDetailRspData } from '@/types/apis/orderDetail'
import { ORDER_DETAIL } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(OrderDetailActions.reset())
//         }),
//     )

export const fetchOrderDetailEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(OrderDetailActions.fetchOrderDetail),
        switchMap((action: PayloadAction<OrderDetailReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<OrderDetailReqData, OrderDetailRspData>(ORDER_DETAIL, {
                    memberId: state$.value.userLogin.memberId,
                    transId: action.payload.transId,
                    accessToken: accessToken,
                }).pipe(
                    switchMap((res) => {
                        return epicSuccessMiddleware(res, [OrderDetailActions.fetchOrderDetailSuccess(res.data)])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            OrderDetailActions.fetchOrderDetailFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(OrderDetailActions.stopFetchOrderDetail)),
                    take(1),
                ),
            ),
        ),
    )

export default [fetchOrderDetailEpic]
