import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as PromoCodeState } from '@/types/stores/promoCode/state'

export const promoCodeState = (state: RootState): PromoCodeState => state.promoCode

// export const getTotalItems = createSelector<RootState, PromoCodeState, number>(promoCodeState, (promoCodeState: PromoCodeState) => {
//     return promoCodeState.shoppingCartListList.totalItems
// })

export const promoCode = createSelector<RootState, PromoCodeState, PromoCodeState>(
    promoCodeState,
    (promoCodeState: PromoCodeState) => {
        return promoCodeState
    },
)
