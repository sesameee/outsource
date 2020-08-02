import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { initialState, State } from './initialState'

export const toggleErrorAlert: CaseReducer<State, PayloadAction<{ error: string; isOpen: boolean }>> = (
    state,
    action,
) => {
    return produce(state, (draft) => {
        draft['isOpen'] = action.payload.isOpen
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
