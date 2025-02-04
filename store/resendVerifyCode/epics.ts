import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { ResendVerifyCodeActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ResendVerifyCodeReqData, ResendVerifyCodeRspData } from '@/types/apis/resendVerifyCode'
import { RESEND_VERIFY_CODE } from '@/services/api/apiConfig'
import { epicSuccessMiddleware, epicAuthFailMiddleware, requireValidToken } from '../epicMiddleware'
import { of } from 'rxjs'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(ResendVerifyCodeActions.reset())
//         }),
//     )

export const fetchResendVerifyCodeEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ResendVerifyCodeActions.fetchResendVerifyCode),
        switchMap((action) =>
            requireValidToken(action$, state$, () =>
                HttpService.PostAsync<ResendVerifyCodeReqData, ResendVerifyCodeRspData>(RESEND_VERIFY_CODE, {
                    ...action.payload,
                    memberId: state$.value.userLogin.memberId,
                }).pipe(
                    switchMap((res) => {
                        if (res.data.code !== '3034') {
                            return epicSuccessMiddleware(res, [
                                ResendVerifyCodeActions.fetchResendVerifyCodeSuccess(res.data),
                            ])
                        }
                        return of(ResendVerifyCodeActions.fetchResendVerifyCodeSuccess(res.data))
                    }),
                    catchError((error: AxiosError) => {
                        const res = <AxiosError>error
                        return epicAuthFailMiddleware(error, [
                            ResendVerifyCodeActions.fetchResendVerifyCodeFailure({ error: res.message }),
                        ])
                    }),
                    takeUntil(action$.ofType(ResendVerifyCodeActions.stopFetchResendVerifyCode)),
                    take(1),
                ),
            ),
        ),
    )

export default [fetchResendVerifyCodeEpic]
