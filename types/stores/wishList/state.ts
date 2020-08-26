import { ProductData } from '@/types/apis/common'

export type State = {
    isFetch: boolean
    cid: string
    name: string
    categoryType: string
    total: number
    data: ProductData[]
    wishListCookie: any[]
    error: string
}
