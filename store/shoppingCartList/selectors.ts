import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ShoppingCartListState } from '@/types/stores/shoppingCartList/state'
import { ShoppingCartProductData } from '@/types/apis/common'
import { promoCode } from '@/store/promoCode/selectors'
export const shoppingCartListState = (state: RootState): ShoppingCartListState => state.shoppingCartList

// export const getTotalItems = createSelector<RootState, ShoppingCartListState, number>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
//     return shoppingCartListState.shoppingCartListList.totalItems
// })

export const getShoppingCartList = createSelector<
    RootState,
    ShoppingCartListState,
    ShoppingCartListState['shoppingCartListData']
>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
    return shoppingCartListState.shoppingCartListData
})

export const getShoppingCartPriceList = createSelector(getShoppingCartList, (list) => {
    return list.map((item: { shoppingCartProducts: any[] }) => {
        if (item.shoppingCartProducts && item.shoppingCartProducts[0]) {
            const detail = item.shoppingCartProducts[0]
            return detail?.price && detail?.qty && detail?.price * detail?.qty
        } else {
            return 0
        }
    })
})

export const getShoppingCartDisCountPriceList = createSelector(getShoppingCartList, promoCode, (list, pData) => {
    return list.map((item: { shoppingCartProducts: any[] }) => {
        if (item.shoppingCartProducts && item.shoppingCartProducts[0]) {
            const detail = item.shoppingCartProducts[0]
            const price = detail?.price && detail?.qty && detail?.price * detail?.qty
            if (pData && pData.data && detail) {
                const isHaveDiscount = pData.data.indexOf(detail.pid) != -1
                return (isHaveDiscount && (price * Number(pData.discountPercent)) / 100) || 0
            }
            return 0
        } else {
            return 0
        }
    })
})

export const getShoppingCartPidList = createSelector<any, any, string[]>(getShoppingCartList, (list) => {
    const pid =
        (list &&
            list.map((item: { shoppingCartProducts: ShoppingCartProductData[] }) => {
                if (item.shoppingCartProducts && item.shoppingCartProducts[0]) {
                    const detail = item.shoppingCartProducts[0]
                    return detail.pid
                }
            })) ||
        []
    return pid
})
