import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { VerifyInvBarCodeActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { VerifyInvBarCodeRspData, VerifyInvBarCodeReqData } from '@/types/apis/verifyInvBarCode'
import { VERIFY_INV_BARCODE } from '@/services/api/apiConfig'
import { PayloadAction } from '@reduxjs/toolkit'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(VerifyInvBarCodeActions.reset())
        }),
    )

export const fetchVerifyInvBarCodeListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(VerifyInvBarCodeActions.fetchVerifyInvBarCode),
        switchMap((action: PayloadAction<VerifyInvBarCodeReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<VerifyInvBarCodeReqData, VerifyInvBarCodeRspData>(VERIFY_INV_BARCODE, {
                    memberId: state$.value.userLogin.memberId,
                    barCode: action.payload.barCode,
                    accessToken: accessToken,
                }).pipe(
                    mergeMap((res) => {
                        return epicSuccessMiddleware(res, [
                            VerifyInvBarCodeActions.fetchVerifyInvBarCodeSuccess(res.data),
                        ])
                    }),
                    catchError((error: AxiosError | string) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            VerifyInvBarCodeActions.fetchVerifyInvBarCodeFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(VerifyInvBarCodeActions.stopFetchVerifyInvBarCode)),
                ),
            ),
        ),
    )

export default [initEpic, fetchVerifyInvBarCodeListEpic]
