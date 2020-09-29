import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { WishListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { WishListRspData } from '@/types/apis/wishList'
import { WISH_LIST } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap((action) => {
            const wishList = action.payload.wishList
            return of(
                WishListActions.reset(),
                WishListActions.setWishListCookie({
                    data: wishList.wishListCookie,
                }),
            )
        }),
    )

export const fetchWishListListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(WishListActions.fetchWishList),
        switchMap(() =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<any, WishListRspData>(WISH_LIST, {
                    memberId: state$.value.userLogin.memberId,
                    accessToken: accessToken,
                }).pipe(
                    switchMap((res) => {
                        return epicSuccessMiddleware(res, [WishListActions.fetchWishListSuccess(res.data)])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            WishListActions.fetchWishListFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(WishListActions.stopFetchWishList)),
                    take(1),
                ),
            ),
        ),
    )

export default [initEpic, fetchWishListListEpic]
