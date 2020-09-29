import { of } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { AddressInfoActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { AddressInfoRspData } from '@/types/apis/addressInfo'
import { ADDRESS_INFO } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(AddressInfoActions.reset())
//         }),
//     )

export const fetchAddressInfoListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(AddressInfoActions.fetchAddressInfo),
        switchMap(() =>
            HttpService.PostAsync<null, AddressInfoRspData>(ADDRESS_INFO).pipe(
                switchMap((res) => {
                    return of(AddressInfoActions.fetchAddressInfoSuccess({ addressInfo: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(AddressInfoActions.fetchAddressInfoFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(AddressInfoActions.stopFetchAddressInfo)),
                take(1),
            ),
        ),
    )

export default [fetchAddressInfoListEpic]
