import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil, retry } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { ShoppingCartModifyActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ShoppingCartModifyReqData, ShoppingCartModifyRspData } from '@/types/apis/shoppingCartModify'
import { SHOPPING_CART_MODIFY } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(ShoppingCartModifyActions.reset())
        }),
    )

export const fetchShoppingCartModifyEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ShoppingCartModifyActions.fetchShoppingCartModify),
        mergeMap((action: PayloadAction<ShoppingCartModifyReqData>) =>
            HttpService.PostAsync<ShoppingCartModifyReqData, ShoppingCartModifyRspData>(SHOPPING_CART_MODIFY, {
                action: action.payload.action,
                memberId: state$.value.userLogin.memberId,
                shoppingCartProductList: action.payload.shoppingCartProductList,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(
                        res,
                        ShoppingCartModifyActions.fetchShoppingCartModifySuccess(res.data),
                    )
                }),
                catchError((error: AxiosError | string) => {
                    const res = <AxiosError>error
                    return epicAuthFailMiddleware(
                        error,
                        ShoppingCartModifyActions.fetchShoppingCartModifyFailure({ error: res.message }),
                    )
                }),
                retry(2),
                takeUntil(action$.ofType(ShoppingCartModifyActions.stopFetchShoppingCartModify)),
            ),
        ),
    )

export default [initEpic, fetchShoppingCartModifyEpic]
