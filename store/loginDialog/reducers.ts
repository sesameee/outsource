import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { initialState, State } from './initialState'

export const toggleLoginDialog: CaseReducer<State, PayloadAction<{ isOpen: boolean }>> = (state, action) => {
    return produce(state, (draft) => {
        console.log('action.payload.isOpen :>> ', action.payload.isOpen)
        draft['isOpen'] = action.payload.isOpen
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
