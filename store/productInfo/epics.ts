import { of } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'

import { ProductInfoActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { ProductInfoReqData, ProductInfoRspData } from '@/types/apis/productInfo'
import { PRODUCT_INFO } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(ProductInfoActions.reset())
//         }),
//     )

export const fetchProductInfoEpic: Epic = (action$) =>
    action$.pipe(
        ofType(ProductInfoActions.fetchProductInfo),
        switchMap((action: PayloadAction<ProductInfoReqData>) =>
            HttpService.PostAsync<ProductInfoReqData, ProductInfoRspData>(PRODUCT_INFO, {
                cid: action.payload.cid,
                pid: action.payload.pid,
            }).pipe(
                switchMap((res) => {
                    return of(
                        ProductInfoActions.fetchProductInfoSuccess({
                            ProductInfoData: res.data,
                        }),
                    )
                }),
                catchError((error: AxiosError) => {
                    return of(ProductInfoActions.fetchProductInfoFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ProductInfoActions.stopFetchProductInfo)),
                take(1),
            ),
        ),
    )

export default [fetchProductInfoEpic]
