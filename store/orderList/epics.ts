import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { OrderListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { OrderListReqData, OrderListRspData } from '@/types/apis/orderList'
import { ORDER_LIST } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(OrderListActions.reset())
//         }),
//     )

export const fetchOrderListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(OrderListActions.fetchOrderList),
        switchMap((action: PayloadAction<OrderListReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<OrderListReqData, OrderListRspData>(ORDER_LIST, {
                    memberId: state$.value.userLogin.memberId,
                    days: action.payload.days,
                    payType: action.payload.payType,
                    accessToken: accessToken,
                }).pipe(
                    switchMap((res) => {
                        return epicSuccessMiddleware(res, [OrderListActions.fetchOrderListSuccess(res.data)])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            OrderListActions.fetchOrderListFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(OrderListActions.stopFetchOrderList)),
                    take(1),
                ),
            ),
        ),
    )

export default [fetchOrderListEpic]
