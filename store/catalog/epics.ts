import { of } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { CatalogActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { catalogList } from '@/types/apis/catalog'
import { CATALOG } from '@/services/api/apiConfig'
import { PayloadAction } from '@reduxjs/toolkit'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(CatalogActions.reset())
//         }),
//     )

export const fetchCatalogEpic: Epic = (action$) =>
    action$.pipe(
        ofType(CatalogActions.fetchCatalog),
        switchMap((action: PayloadAction<{ categoryType: string; cid: string }>) =>
            HttpService.PostAsync<{ categoryType: string; cid: string }, catalogList>(CATALOG, {
                cid: action.payload.cid,
                categoryType: action.payload.categoryType,
            }).pipe(
                switchMap((res) => {
                    return of(CatalogActions.fetchCatalogSuccess({ catalogList: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(CatalogActions.fetchCatalogFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(CatalogActions.stopFetchCatalog)),
                take(1),
            ),
        ),
    )

export default [fetchCatalogEpic]
