import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { VerifyCodeActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { VerifyCodeRspData, VerifyCodeReqData } from '@/types/apis/verifyCode'
import { VERIFY_CODE } from '@/services/api/apiConfig'
import { PayloadAction } from '@reduxjs/toolkit'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(VerifyCodeActions.reset())
        }),
    )

export const fetchVerifyCodeListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(VerifyCodeActions.fetchVerifyCode),
        switchMap((action: PayloadAction<VerifyCodeReqData>) =>
            HttpService.PostAsync<VerifyCodeReqData, VerifyCodeRspData>(VERIFY_CODE, {
                memberId: action.payload.memberId,
                code: action.payload.code,
            }).pipe(
                mergeMap((res) => {
                    return of(VerifyCodeActions.fetchVerifyCodeSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(VerifyCodeActions.fetchVerifyCodeFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(VerifyCodeActions.stopFetchVerifyCode)),
            ),
        ),
    )

export default [initEpic, fetchVerifyCodeListEpic]
