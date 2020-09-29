import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { WishModifyActions, WishListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { WishModifyReqData, WishModifyRspData } from '@/types/apis/wishModify'
import { WISH_MODIFY } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(WishModifyActions.reset())
//         }),
//     )

export const fetchWishModifyEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(WishModifyActions.fetchWishModify),
        switchMap((action: PayloadAction<WishModifyReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<WishModifyReqData, WishModifyRspData>(WISH_MODIFY, {
                    action: action.payload.action,
                    memberId: state$.value.userLogin.memberId,
                    shoppingWishProductList: action.payload.shoppingWishProductList,
                    accessToken: accessToken,
                }).pipe(
                    switchMap((res) => {
                        return epicSuccessMiddleware(
                            res,
                            [WishModifyActions.fetchWishModifySuccess(res.data), WishListActions.fetchWishList()],
                            true,
                        )
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            WishModifyActions.fetchWishModifyFailure({ error: res.message }),
                            WishListActions.fetchWishList(),
                        ])
                    }),

                    takeUntil(action$.ofType(WishModifyActions.stopFetchWishModify)),
                    take(1),
                ),
            ),
        ),
    )

export default [fetchWishModifyEpic]
