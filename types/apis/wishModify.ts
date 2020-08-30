import { WishProductData, Response } from './common'

export interface WishModifyReqData {
    action: string
    memberId: string
    shoppingWishProductList: WishProductData[]
    accessToken: string
}

export interface WishModifyRspData extends Response {}
