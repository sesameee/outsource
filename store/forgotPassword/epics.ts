import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { ForgotPasswordActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ForgotPasswordReqData, ForgotPasswordRspData } from '@/types/apis/forgotPassword'
import { FORGOT_PASSWORD } from '@/services/api/apiConfig'
import { epicSuccessMiddleware } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(ForgotPasswordActions.reset())
        }),
    )

export const fetchForgotPasswordEpic: Epic = (action$) =>
    action$.pipe(
        ofType(ForgotPasswordActions.fetchForgotPassword),
        switchMap((action: PayloadAction<ForgotPasswordReqData>) =>
            HttpService.PostAsync<ForgotPasswordReqData, ForgotPasswordRspData>(FORGOT_PASSWORD, {
                phone: action.payload.phone,
                rocId: action.payload.rocId,
            }).pipe(
                mergeMap((res) => {
                    return epicSuccessMiddleware(res, ForgotPasswordActions.fetchForgotPasswordSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(ForgotPasswordActions.fetchForgotPasswordFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ForgotPasswordActions.stopFetchForgotPassword)),
            ),
        ),
    )

export default [initEpic, fetchForgotPasswordEpic]
