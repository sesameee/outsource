import { Response } from './common'

export interface RefundReasonData {
    code: string
    desc: string
}

export interface RefundReasonRspData extends Response {
    data: RefundReasonData[]
}
