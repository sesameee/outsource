import { of } from 'rxjs'
import { switchMap, mergeMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { ResetPasswordActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ResetPasswordReqData, ResetPasswordRspData } from '@/types/apis/resetPassword'
import { RESET_PASSWORD } from '@/services/api/apiConfig'
import { epicSuccessMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(ResetPasswordActions.reset())
//         }),
//     )

export const fetchResetPasswordEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ResetPasswordActions.fetchResetPassword),
        switchMap((action: PayloadAction<ResetPasswordReqData>) =>
            HttpService.PostAsync<ResetPasswordReqData, ResetPasswordRspData>(RESET_PASSWORD, {
                memberId: state$.value.userLogin.memberId,
                phone: action.payload.phone,
                pwd1: action.payload.pwd1,
                pwd2: action.payload.pwd2,
                type: action.payload.type,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(res, [ResetPasswordActions.fetchResetPasswordSuccess(res.data)], true)
                }),
                catchError((error: AxiosError) => {
                    return of(ResetPasswordActions.fetchResetPasswordFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ResetPasswordActions.stopFetchResetPassword)),
                take(1),
            ),
        ),
    )

export default [fetchResetPasswordEpic]
