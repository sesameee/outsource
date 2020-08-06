import { OrderData } from '@/types/apis/orderList'

export type State = {
    isFetch: boolean
    data: OrderData[]
    error: string
}
