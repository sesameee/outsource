import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { CatalogActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { catalogList } from '@/types/apis/catalog'
import { CATALOG } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(CatalogActions.reset())
        }),
    )

export const fetchCatalogEpic: Epic = (action$) =>
    action$.pipe(
        ofType(CatalogActions.fetchCatalog),
        switchMap(() =>
            HttpService.PostAsync<null, catalogList>(CATALOG).pipe(
                mergeMap((res) => {
                    return of(CatalogActions.fetchCatalogSuccess({ catalogList: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(CatalogActions.fetchCatalogFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(CatalogActions.stopFetchCatalog)),
            ),
        ),
    )

export default [initEpic, fetchCatalogEpic]
