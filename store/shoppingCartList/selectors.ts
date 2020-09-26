import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ShoppingCartListState } from '@/types/stores/shoppingCartList/state'
import { ShoppingCartProductData, ShoppingCartListData, ShoppingCartProductDataTrans } from '@/types/apis/common'
import { getUserLoginData } from '@/store/userLogin/selectors'
import { accSubtr } from '@/utils'
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

export const getPromoCode = createSelector<RootState, ShoppingCartListState, ShoppingCartListState['promoCode']>(
    shoppingCartListState,
    (shoppingCartListState: ShoppingCartListState) => {
        return shoppingCartListState.promoCode
    },
)

export const getShoppingCartList = createSelector<
    RootState,
    ShoppingCartListState,
    ShoppingCartListState['shoppingCartListData']
>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
    return shoppingCartListState.shoppingCartListData
})

export const getShoppingCookieCartList = createSelector<
    RootState,
    ShoppingCartListState,
    ShoppingCartListState['shoppingCartListDataCookie']
>(shoppingCartListState, (shoppingCartListState: ShoppingCartListState) => {
    return shoppingCartListState.shoppingCartListDataCookie
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

export const getShoppingCartPriceList = createSelector(
    getShoppingCartItemList,
    getShoppingCookieCartList,
    getUserLoginData,
    (list, cookieList, user) => {
        const data = user.accessToken ? list : cookieList
        return data.map((item: ShoppingCartProductDataTrans) => {
            return (item?.price && item?.qty && item?.price * item?.qty) || 0
        })
    },
)

export const getShoppingCartDisCountPriceList = createSelector(getShoppingCartItemList, (list) => {
    return list.map((item: ShoppingCartProductDataTrans) => {
        const price = (item?.price && item?.qty && item?.price * item?.qty) || 0
        if (item.discountAmount) {
            return accSubtr(price, item.discountAmount)
        }
        return 0
    })
})

export const getShoppingCartPidList = createSelector<any, any, string[]>(getShoppingCartItemList, (list) => {
    return list.map((item: ShoppingCartProductDataTrans) => {
        return item.pid
    })
})

export const getPromoCodeName = createSelector(getShoppingCartItemList, getPromoCode, (list, promoCode) => {
    return promoCode ? list && list[0] && list[0].eventName : ''
})
