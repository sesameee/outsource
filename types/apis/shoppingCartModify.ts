import { ShoppingCartProductData } from './common'

export interface ShoppingCartModifyData {
    action: string
    memberId: string
    shoppingCartProductList: ShoppingCartProductData[]
    accessToken: string
}
