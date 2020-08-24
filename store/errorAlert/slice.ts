import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import * as reducers from './reducers'

export const errorAlertSlice = createSlice({
    name: 'errorAlert',
    initialState: initialState,
    reducers: {
        toggleErrorAlert: reducers.toggleErrorAlert,
    },
})
