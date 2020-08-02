import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ProductInfoState } from '@/types/stores/productInfo/state'

export const productInfoState = (state: RootState): ProductInfoState => state.productInfo

// export const getTotalItems = createSelector<RootState, ProductInfoState, number>(productInfoState, (productInfoState: ProductInfoState) => {
//     return productInfoState.productInfoList.totalItems
// })

export const getProductInfo = createSelector<RootState, ProductInfoState, ProductInfoState['productInfoData']>(
    productInfoState,
    (productInfoState: ProductInfoState) => {
        return productInfoState.productInfoData
    },
)
