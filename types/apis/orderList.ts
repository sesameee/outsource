import { Response } from './common'

export interface OrderListReqData {
    memberId: string
    days?: number
    payType?: number | null
    accessToken: string
}

export interface OrderData {
    transId: string
    prdName: string
    pay: string
    invoiceAmount: string
    txStatus: string
    txDate: string
    txType: number
    invoiceNo: string
    totalAmount: string
    discount: string
    discountType: string
    points: string
}

export interface OrderListRspData extends Response {
    data: OrderData[]
}
