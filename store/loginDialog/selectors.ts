import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as LoginDialogState } from './initialState'

export const loginDialogState = (state: RootState): LoginDialogState => state.loginDialog

export const getLoginDialogData = createSelector<RootState, LoginDialogState, LoginDialogState>(
    loginDialogState,
    (loginDialogState: LoginDialogState) => {
        return loginDialogState
    },
)
