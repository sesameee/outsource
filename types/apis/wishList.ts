import { ProductData } from './common'

export interface WishListRspData extends Response {
    cid: string
    name: string
    categoryType: string
    total: number
    data: ProductData[]
}
