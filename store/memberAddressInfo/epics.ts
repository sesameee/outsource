import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { MemberAddressInfoActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { MemberAddressInfoReqData, MemberAddressInfoRspData } from '@/types/apis/memberAddressInfo'
import { MEMBER_ADDRESS_INFO } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(MemberAddressInfoActions.reset())
        }),
    )

export const fetchMemberAddressInfoEpic: Epic = (action$) =>
    action$.pipe(
        ofType(MemberAddressInfoActions.fetchMemberAddressInfo),
        mergeMap((action: PayloadAction<MemberAddressInfoReqData>) =>
            HttpService.PostAsync<MemberAddressInfoReqData, MemberAddressInfoRspData>(MEMBER_ADDRESS_INFO, {
                memberId: action.payload.memberId,
                category: action.payload.category,
                accessToken: action.payload.accessToken,
            }).pipe(
                mergeMap((res) => {
                    return of(MemberAddressInfoActions.fetchMemberAddressInfoSuccess(res.data))
                }),
                catchError((error: AxiosError) => {
                    return of(MemberAddressInfoActions.fetchMemberAddressInfoFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(MemberAddressInfoActions.stopFetchMemberAddressInfo)),
            ),
        ),
    )

export default [initEpic, fetchMemberAddressInfoEpic]
