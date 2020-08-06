import { ProductData, Response } from './common'

export interface RefundReqData {
    memberId: string
    transId?: string
    refundProductList?: ProductData[]
    cid: string
    pid: string
    spec1: string
    spec2: string
    qty: number
    reason: string
    memo: string
    accessToken: string
}

export interface RefundData {
    message: string
}

export interface RefundRspData extends Response {
    data: RefundData
}
