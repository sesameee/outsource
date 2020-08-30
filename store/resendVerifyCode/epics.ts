import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { ResendVerifyCodeActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ResendVerifyCodeReqData, ResendVerifyCodeRspData } from '@/types/apis/resendVerifyCode'
import { RESET_PASSWORD } from '@/services/api/apiConfig'
import { epicSuccessMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(ResendVerifyCodeActions.reset())
        }),
    )

export const fetchResendVerifyCodeEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ResendVerifyCodeActions.fetchResendVerifyCode),
        mergeMap(() =>
            HttpService.PostAsync<ResendVerifyCodeReqData, ResendVerifyCodeRspData>(RESET_PASSWORD, {
                memberId: state$.value.userLogin.memberId,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(res, ResendVerifyCodeActions.fetchResendVerifyCodeSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(ResendVerifyCodeActions.fetchResendVerifyCodeFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ResendVerifyCodeActions.stopFetchResendVerifyCode)),
            ),
        ),
    )

export default [initEpic, fetchResendVerifyCodeEpic]
