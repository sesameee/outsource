import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ErrorAlertState } from './initialState'

export const errorAlertState = (state: RootState): ErrorAlertState => state.errorAlert

export const getErrorAlertData = createSelector<RootState, ErrorAlertState, ErrorAlertState>(
    errorAlertState,
    (errorAlertState: ErrorAlertState) => {
        return errorAlertState
    },
)
