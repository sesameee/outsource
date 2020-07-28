import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '@/types/stores/catalog/actions'

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {
        fetchCatalogSuccess: reducers.fetchCatalogSuccess,
        fetchCatalogFailure: reducers.fetchCatalogFailure,
        setIsFetch: reducers.setIsSearching,
        reset: reducers.reset,
    },
})

const fetchCatalog = createAction(types.FETCH_CATALOG)
const stopFetchCatalog = createAction(types.STOP_FETCH_CATALOG)

export const catalogCreateActions = { fetchCatalog, stopFetchCatalog }
