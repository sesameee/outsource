import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as DonateInvoiceState } from '@/types/stores/donateInvoice/state'

export const donateInvoiceState = (state: RootState): DonateInvoiceState => state.donateInvoice

// export const getTotalItems = createSelector<RootState, DonateInvoiceState, number>(donateInvoiceState, (donateInvoiceState: DonateInvoiceState) => {
//     return donateInvoiceState.donateInvoice.totalItems
// })

export const getDonateInvoice = createSelector<
    RootState,
    DonateInvoiceState,
    DonateInvoiceState['donateInvoiceList']
>(donateInvoiceState, (donateInvoiceState: DonateInvoiceState) => {
    return donateInvoiceState.donateInvoiceList
})
