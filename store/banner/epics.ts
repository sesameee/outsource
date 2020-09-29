import { of } from 'rxjs'
import { switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { BannerActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { BannerList } from '@/types/apis/banner'
import { BANNER } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(BannerActions.reset())
//         }),
//     )

export const fetchBannerEpic: Epic = (action$) =>
    action$.pipe(
        ofType(BannerActions.fetchBanner),
        switchMap(() => {
            return HttpService.PostAsync<{ isRecommend: number }, BannerList>(BANNER, {
                isRecommend: 0,
            }).pipe(
                switchMap((res) => {
                    return of(
                        BannerActions.fetchBannerSuccess({
                            bannerList: res.data,
                            isRecommend: 0,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(BannerActions.fetchBannerFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(BannerActions.stopFetchBanner)),
            )
        }),
    )

export const fetchisRecommendEpic: Epic = (action$) =>
    action$.pipe(
        ofType(BannerActions.fetchRecommend),
        switchMap(() => {
            console.log('isRecommend :>> ')
            return HttpService.PostAsync<{ isRecommend: number }, BannerList>(BANNER, {
                isRecommend: 1,
            }).pipe(
                switchMap((res) => {
                    console.log('res  isRecommend:>> ', res)
                    return of(
                        BannerActions.fetchBannerSuccess({
                            bannerList: res.data,
                            isRecommend: 1,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(BannerActions.fetchBannerFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(BannerActions.stopFetchRecommend)),
            )
        }),
    )

export default [fetchBannerEpic, fetchisRecommendEpic]
