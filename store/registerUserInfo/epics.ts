import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { RegisterUserInfoActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { RegisterUserInfoReqData, RegisterUserInfoRspData } from '@/types/apis/registerUserInfo'
import { REGISTER_USER_INFO } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(RegisterUserInfoActions.reset())
        }),
    )

export const fetchRegisterUserInfoEpic: Epic = (action$) =>
    action$.pipe(
        ofType(RegisterUserInfoActions.fetchRegisterUserInfo),
        mergeMap((action: PayloadAction<RegisterUserInfoReqData>) =>
            HttpService.PostAsync<RegisterUserInfoReqData, RegisterUserInfoRspData>(REGISTER_USER_INFO, {
                memberId: action.payload.memberId,
                rocId: action.payload.rocId,
                sex: action.payload.sex,
                cityCode: action.payload.cityCode,
                areaCode: action.payload.areaCode,
                address: action.payload.address,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(RegisterUserInfoActions.fetchRegisterUserInfoSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(RegisterUserInfoActions.fetchRegisterUserInfoFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(RegisterUserInfoActions.stopFetchRegisterUserInfo)),
            ),
        ),
    )

export default [initEpic, fetchRegisterUserInfoEpic]
