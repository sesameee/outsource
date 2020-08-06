import { OrderDetailData } from '@/types/apis/orderDetail'

export type State = {
    isFetch: boolean
    data: OrderDetailData
    error: string
}
