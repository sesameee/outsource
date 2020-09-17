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
import { epicSuccessMiddleware, requireValidToken } from '../epicMiddleware'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(MemberAddressInfoActions.reset())
        }),
    )

export const fetchMemberAddressInfoEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(MemberAddressInfoActions.fetchMemberAddressInfo),
        switchMap((action: PayloadAction<MemberAddressInfoReqData>) =>
            requireValidToken(action$, state$, (accessToken: any) =>
                HttpService.PostAsync<MemberAddressInfoReqData, MemberAddressInfoRspData>(MEMBER_ADDRESS_INFO, {
                    memberId: state$.value.userLogin.memberId,
                    category: action.payload.category,
                    accessToken: accessToken,
                }).pipe(
                    mergeMap((res) => {
                        return epicSuccessMiddleware(res, [
                            MemberAddressInfoActions.fetchMemberAddressInfoSuccess(res.data),
                        ])
                    }),
                    catchError((error: AxiosError) => {
                        return of(MemberAddressInfoActions.fetchMemberAddressInfoFailure({ error: error.message }))
                    }),
                    takeUntil(action$.ofType(MemberAddressInfoActions.stopFetchMemberAddressInfo)),
                ),
            ),
        ),
    )

export default [initEpic, fetchMemberAddressInfoEpic]
