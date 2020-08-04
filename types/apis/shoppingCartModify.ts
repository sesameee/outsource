import { ShoppingCartProductData, Response } from './common'

export interface ShoppingCartModifyReqData {
    action: string
    memberId: string
    shoppingCartProductList: ShoppingCartProductData[]
}

export interface ShoppingCartModifyRspData extends Response {}
