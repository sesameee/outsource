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

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(ShoppingCartListActions.reset())
        }),
    )

export const fetchShoppingCartListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ShoppingCartListActions.fetchShoppingCartList),
        mergeMap((action: PayloadAction<ShoppingCartListReqData>) =>
            HttpService.PostAsync<ShoppingCartListReqData, ShoppingCartListRspData>(SHOPPING_CART_LIST, {
                memberId: state$.value.userLogin.memberId,
                shipType: action.payload.shipType,
                accessToken: state$.value.userLogin.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(ShoppingCartListActions.fetchShoppingCartListSuccess({ data: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(ShoppingCartListActions.fetchShoppingCartListFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ShoppingCartListActions.stopFetchShoppingCartList)),
            ),
        ),
    )

export default [initEpic, fetchShoppingCartListEpic]
