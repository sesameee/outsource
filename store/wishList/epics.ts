import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { WishListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { WishListRspData } from '@/types/apis/wishList'
import { WISH_LIST } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(WishListActions.reset())
        }),
    )

export const fetchWishListListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(WishListActions.fetchWishList),
        switchMap(() =>
            HttpService.PostAsync<any, WishListRspData>(WISH_LIST, {
                memberId: state$.value.userLogin.memberId,
                accessToken: state$.value.userLogin.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(WishListActions.fetchWishListSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(WishListActions.fetchWishListFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(WishListActions.stopFetchWishList)),
            ),
        ),
    )

export default [initEpic, fetchWishListListEpic]
