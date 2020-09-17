import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { ShoppingCartListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ShoppingCartListReqData, ShoppingCartListRspData } from '@/types/apis/shoppingCartList'
import { SHOPPING_CART_LIST } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage

export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap((action) => {
            const shoppingCartList = action.payload.shoppingCartList
            return of(
                ShoppingCartListActions.reset(),
                ShoppingCartListActions.setShoppingCartListCookie({
                    data: shoppingCartList.shoppingCartListDataCookie,
                }),
            )
        }),
    )

export const fetchShoppingCartListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ShoppingCartListActions.fetchShoppingCartList),
        switchMap((action: PayloadAction<ShoppingCartListReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<ShoppingCartListReqData, ShoppingCartListRspData>(SHOPPING_CART_LIST, {
                    memberId: state$.value.userLogin.memberId,
                    shipType: action.payload.shipType,
                    accessToken: accessToken,
                }).pipe(
                    mergeMap((res) => {
                        return epicSuccessMiddleware(res, [
                            ShoppingCartListActions.fetchShoppingCartListSuccess({ data: res.data }),
                        ])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(
                            error,
                            ShoppingCartListActions.fetchShoppingCartListFailure({ error: res.message }),
                        )
                    }),
                    takeUntil(action$.ofType(ShoppingCartListActions.stopFetchShoppingCartList)),
                ),
            ),
        ),
    )

export default [initEpic, fetchShoppingCartListEpic]
