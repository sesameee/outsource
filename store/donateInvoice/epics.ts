import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { DonateInvoiceActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { DonateInvoiceRspData } from '@/types/apis/donateInvoice'
import { DONATE_INVOICE } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(DonateInvoiceActions.reset())
        }),
    )

export const fetchDonateInvoiceListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(DonateInvoiceActions.fetchDonateInvoice),
        switchMap(() =>
            HttpService.PostAsync<null, DonateInvoiceRspData>(DONATE_INVOICE).pipe(
                mergeMap((res) => {
                    return of(DonateInvoiceActions.fetchDonateInvoiceSuccess({ donateInvoice: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(DonateInvoiceActions.fetchDonateInvoiceFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(DonateInvoiceActions.stopFetchDonateInvoice)),
            ),
        ),
    )

export default [initEpic, fetchDonateInvoiceListEpic]
