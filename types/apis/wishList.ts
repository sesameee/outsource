import { ProductData } from './common'

export interface WishListData {
    code: string
    message: string
    cid: string
    name: string
    categoryType: string
    total: number
    data: ProductData[]
}
