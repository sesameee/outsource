import { RefundData } from '@/types/apis/refund'

export type State = {
    isFetch: boolean
    data: RefundData
    error: string
}
