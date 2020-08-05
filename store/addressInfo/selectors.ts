import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as AddressInfoState } from '@/types/stores/addressInfo/state'

export const addressInfoState = (state: RootState): AddressInfoState => state.addressInfo

// export const getTotalItems = createSelector<RootState, AddressInfoState, number>(addressInfoState, (addressInfoState: AddressInfoState) => {
//     return addressInfoState.addressInfo.totalItems
// })

export const getAddressInfo = createSelector<
    RootState,
    AddressInfoState,
    AddressInfoState['addressInfoList']
>(addressInfoState, (addressInfoState: AddressInfoState) => {
    return addressInfoState.addressInfoList
})
