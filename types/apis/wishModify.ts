import { ShoppingCartProductData, Response } from './common'

export interface WishModifyReqData {
    action: string
    memberId: string
    shoppingCartProductList: ShoppingCartProductData[]
}

export interface WishModifyRspData extends Response {}
