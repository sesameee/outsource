import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { BannerActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { bannerList } from '@/types/apis/banner'
import { BANNER } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(BannerActions.reset())
        }),
    )

export const fetchBannerEpic: Epic = (action$) =>
    action$.pipe(
        ofType(BannerActions.fetchBanner),
        mergeMap((action: PayloadAction<{ isRecommend: number }>) =>
            HttpService.PostAsync<{ isRecommend: number }, bannerList>(BANNER, {
                isRecommend: action.payload.isRecommend,
            }).pipe(
                mergeMap((res) => {
                    return of(
                        BannerActions.fetchBannerSuccess({
                            bannerList: res.data,
                            isRecommend: action.payload.isRecommend,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(BannerActions.fetchBannerFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(BannerActions.stopFetchBanner)),
            ),
        ),
    )

export default [initEpic, fetchBannerEpic]
