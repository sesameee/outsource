import { ProductInfoData } from '@/types/apis/productInfo'

export type State = {
    isFetch: boolean
    productInfoData: ProductInfoData
    error: string
}
