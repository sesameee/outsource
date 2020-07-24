import { ShoppingCartProductData } from './common'

export interface ShoppingCartListData {
    cid: string
    name: string
    categoryType: string
    shoppingCartProducts: ShoppingCartProductData[]
}
