import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import * as reducers from './reducers'

export const loginDialogSlice = createSlice({
    name: 'loginDialog',
    initialState: initialState,
    reducers: {
        toggleLoginDialog: reducers.toggleLoginDialog,
    },
})
