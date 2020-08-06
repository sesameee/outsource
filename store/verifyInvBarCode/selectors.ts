import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as VerifyInvBarCodeState } from '@/types/stores/verifyInvBarCode/state'

export const verifyInvBarCodeState = (state: RootState): VerifyInvBarCodeState => state.verifyInvBarCode

// export const getTotalItems = createSelector<RootState, VerifyInvBarCodeState, number>(verifyInvBarCodeState, (verifyInvBarCodeState: VerifyInvBarCodeState) => {
//     return verifyInvBarCodeState.verifyInvBarCode.totalItems
// })

export const getVerifyInvBarCode = createSelector<
    RootState,
    VerifyInvBarCodeState,
    VerifyInvBarCodeState['message']
>(verifyInvBarCodeState, (verifyInvBarCodeState: VerifyInvBarCodeState) => {
    return verifyInvBarCodeState.message
})
