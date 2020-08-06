import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as MemberAddressInfoState } from '@/types/stores/memberAddressInfo/state'

export const memberAddressInfoState = (state: RootState): MemberAddressInfoState => state.memberAddressInfo

// export const getTotalItems = createSelector<RootState, MemberAddressInfoState, number>(memberAddressInfoState, (memberAddressInfoState: MemberAddressInfoState) => {
//     return memberAddressInfoState.shoppingCartListList.totalItems
// })

export const memberAddressInfo = createSelector<RootState, MemberAddressInfoState, MemberAddressInfoState['data']>(
    memberAddressInfoState,
    (memberAddressInfoState: MemberAddressInfoState) => {
        return memberAddressInfoState.data
    },
)
