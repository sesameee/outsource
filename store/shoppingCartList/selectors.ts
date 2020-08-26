import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ShoppingCartListState } from '@/types/stores/shoppingCartList/state'
import { ShoppingCartProductData, ShoppingCartListData, ShoppingCartProductDataTrans } from '@/types/apis/common'
import { promoCode } from '@/store/promoCode/selectors'
import { accMul, accDiv } from '@/utils'
export const shoppingCartListState = (state: RootState): ShoppingCartListState => state.shoppingCartList

// export const getTotalItems = createSelector<RootState, ShoppingCartListState, number>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
//     return shoppingCartListState.shoppingCartListList.totalItems
// })

export const getShoppingCartListCookie = createSelector<
    RootState,
    ShoppingCartListState,
    ShoppingCartListState['shoppingCartListDataCookie']
>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
    return shoppingCartListState.shoppingCartListDataCookie
})

export const getShoppingCartList = createSelector<
    RootState,
    ShoppingCartListState,
    ShoppingCartListState['shoppingCartListData']
>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
    return shoppingCartListState.shoppingCartListData
})

export const getShoppingCartItemList = createSelector(getShoppingCartList, (list) => {
    const itemList: ShoppingCartProductDataTrans[] = []
    list &&
        list.map((item: ShoppingCartListData) => {
            item.shoppingCartProducts &&
                item.shoppingCartProducts.map((data: ShoppingCartProductData) => {
                    itemList.push({
                        ...data,
                        _cid: item.cid,
                        _name: item.name,
                        _categoryType: item.categoryType,
                    })
                })
        })
    return itemList
})

export const getShoppingCartPriceList = createSelector(getShoppingCartItemList, (list) => {
    return list.map((item: ShoppingCartProductDataTrans) => {
        return (item?.price && item?.qty && item?.price * item?.qty) || 0
    })
})

export const getShoppingCartDisCountPriceList = createSelector(getShoppingCartItemList, promoCode, (list, pData) => {
    return list.map((item: ShoppingCartProductDataTrans) => {
        const price = (item?.price && item?.qty && item?.price * item?.qty) || 0
        if (pData && pData.data) {
            const isHaveDiscount = pData.data.indexOf(item.pid) != -1
            return isHaveDiscount ? accDiv(accMul(price, Number(pData.discountPercent)), 100) : 0
        }
        return price
    })
})

export const getShoppingCartPidList = createSelector<any, any, string[]>(getShoppingCartItemList, (list) => {
    return list.map((item: ShoppingCartProductDataTrans) => {
        return item.pid
    })
})
