import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as CheckoutState } from '@/types/stores/checkout/state'

export const checkoutState = (state: RootState): CheckoutState => state.checkout

// export const getTotalItems = createSelector<RootState, CheckoutState, number>(checkoutState, (checkoutState: CheckoutState) => {
//     return checkoutState.shoppingCartListList.totalItems
// })

export const checkout = createSelector<
    RootState,
    CheckoutState,
    CheckoutState
>(checkoutState, (checkoutState: CheckoutState) => {
    return checkoutState
})
