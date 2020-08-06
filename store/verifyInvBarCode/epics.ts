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

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(VerifyInvBarCodeActions.reset())
        }),
    )

export const fetchVerifyInvBarCodeListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(VerifyInvBarCodeActions.fetchVerifyInvBarCode),
        switchMap((action: PayloadAction<VerifyInvBarCodeReqData>) =>
            HttpService.PostAsync<VerifyInvBarCodeReqData, VerifyInvBarCodeRspData>(VERIFY_INV_BARCODE, {
                memberId: action.payload.memberId,
                barCode: action.payload.barCode,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(VerifyInvBarCodeActions.fetchVerifyInvBarCodeSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(VerifyInvBarCodeActions.fetchVerifyInvBarCodeFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(VerifyInvBarCodeActions.stopFetchVerifyInvBarCode)),
            ),
        ),
    )

export default [initEpic, fetchVerifyInvBarCodeListEpic]
