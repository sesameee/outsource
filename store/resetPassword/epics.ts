import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { ResetPasswordActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ResetPasswordReqData, ResetPasswordRspData } from '@/types/apis/resetPassword'
import { RESET_PASSWORD } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(ResetPasswordActions.reset())
        }),
    )

export const fetchResetPasswordEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(ResetPasswordActions.fetchResetPassword),
        mergeMap((action: PayloadAction<ResetPasswordReqData>) =>
            HttpService.PostAsync<ResetPasswordReqData, ResetPasswordRspData>(RESET_PASSWORD, {
                memberId: state$.value.userLogin.memberId,
                phone: action.payload.phone,
                pwd1: action.payload.pwd1,
                pwd2: action.payload.pwd2,
                type: action.payload.type,
            }).pipe(
                mergeMap((res) => {
                    return of(ResetPasswordActions.fetchResetPasswordSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(ResetPasswordActions.fetchResetPasswordFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ResetPasswordActions.stopFetchResetPassword)),
            ),
        ),
    )

export default [initEpic, fetchResetPasswordEpic]
