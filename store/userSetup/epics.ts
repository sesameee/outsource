import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { UserSetupActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { UserSetupReqData, UserSetupRspData } from '@/types/apis/userSetup'
import { USER_SETUP } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(UserSetupActions.reset())
        }),
    )

export const fetchUserSetupEpic: Epic = (action$) =>
    action$.pipe(
        ofType(UserSetupActions.fetchUserSetup),
        mergeMap((action: PayloadAction<UserSetupReqData>) =>
            HttpService.PostAsync<UserSetupReqData, UserSetupRspData>(USER_SETUP, {
                memberId: action.payload.memberId,
                email: action.payload.email,
                cityCode: action.payload.cityCode,
                areaCode: action.payload.areaCode,
                address: action.payload.address,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(UserSetupActions.fetchUserSetupSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(UserSetupActions.fetchUserSetupFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(UserSetupActions.stopFetchUserSetup)),
            ),
        ),
    )

export default [initEpic, fetchUserSetupEpic]