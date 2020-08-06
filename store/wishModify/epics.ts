import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { WishModifyActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { WishModifyReqData, WishModifyRspData } from '@/types/apis/wishModify'
import { WISH_MODIFY } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(WishModifyActions.reset())
        }),
    )

export const fetchWishModifyEpic: Epic = (action$) =>
    action$.pipe(
        ofType(WishModifyActions.fetchWishModify),
        mergeMap((action: PayloadAction<WishModifyReqData>) =>
            HttpService.PostAsync<WishModifyReqData, WishModifyRspData>(WISH_MODIFY, {
                action: action.payload.action,
                memberId: action.payload.memberId,
                shoppingCartProductList: action.payload.shoppingCartProductList,
            }).pipe(
                mergeMap((res) => {
                    return of(WishModifyActions.fetchWishModifySuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(WishModifyActions.fetchWishModifyFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(WishModifyActions.stopFetchWishModify)),
            ),
        ),
    )

export default [initEpic, fetchWishModifyEpic]
