import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { PromoCodeActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { PromoCodeReqData, PromoCodeRspData } from '@/types/apis/promoCode'
import { PROMO_CODE } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(PromoCodeActions.reset())
        }),
    )

export const fetchPromoCodeEpic: Epic = (action$) =>
    action$.pipe(
        ofType(PromoCodeActions.fetchPromoCode),
        mergeMap((action: PayloadAction<PromoCodeReqData>) =>
            HttpService.PostAsync<PromoCodeReqData, PromoCodeRspData>(PROMO_CODE, {
                promoCode: action.payload.promoCode,
                memberId: action.payload.memberId,
                pid: action.payload.pid,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(PromoCodeActions.fetchPromoCodeSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(PromoCodeActions.fetchPromoCodeFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(PromoCodeActions.stopFetchPromoCode)),
            ),
        ),
    )

export default [initEpic, fetchPromoCodeEpic]
