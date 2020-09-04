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
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(PromoCodeActions.reset())
        }),
    )

export const fetchPromoCodeEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(PromoCodeActions.fetchPromoCode),
        switchMap((action: PayloadAction<PromoCodeReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<PromoCodeReqData, PromoCodeRspData>(PROMO_CODE, {
                    promoCode: action.payload.promoCode,
                    memberId: state$.value.userLogin.memberId,
                    pid: action.payload.pid,
                    accessToken: accessToken,
                }).pipe(
                    mergeMap((res) => {
                        return epicSuccessMiddleware(res, PromoCodeActions.fetchPromoCodeSuccess(res.data))
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(
                            error,
                            PromoCodeActions.fetchPromoCodeFailure({ error: res.message }),
                        )
                    }),
                    takeUntil(action$.ofType(PromoCodeActions.stopFetchPromoCode)),
                ),
            ),
        ),
    )

export default [initEpic, fetchPromoCodeEpic]
