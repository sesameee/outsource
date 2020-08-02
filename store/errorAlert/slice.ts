import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import * as reducers from './reducers'

export const errorAlertSlice = createSlice({
    name: 'errorAlert',
    initialState: initialState,
    reducers: {
        toggleErrorAlert: reducers.toggleErrorAlert,
        reset: reducers.reset,
    },
})

const toggleErrorAlert = createAction<{ error: string; isOpen: boolean }>('TOGGLE_ERROR_ALERT')

export const errorAlertCreateActions = { toggleErrorAlert }
