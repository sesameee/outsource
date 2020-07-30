import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as CatalogState } from '@/types/stores/catalog/state'

export const catalogState = (state: RootState): CatalogState => state.catalog

// export const getTotalItems = createSelector<RootState, CatalogState, number>(catalogState, (catalogState: CatalogState) => {
//     return catalogState.catalogList.totalItems
// })

export const getCatalogList = createSelector<RootState, CatalogState, CatalogState['catalogList']>(
    catalogState,
    (catalogState: CatalogState) => {
        return catalogState.catalogList
    },
)

export const getProductList = createSelector<RootState, CatalogState, CatalogState['productList']>(
    catalogState,
    (catalogState: CatalogState) => {
        return catalogState.productList
    },
)
