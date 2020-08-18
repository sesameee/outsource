import { RefundReasonData } from '@/types/apis/refundReason'

export type State = {
    isFetch: boolean
    data: RefundReasonData[]
    error: string
}
