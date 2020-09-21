import { ShipInfoData, Response } from './common'

export interface CheckoutReqData {
    memberId: string
    mid?: string
    tid?: string
    payType: number
    payload: string
    shipInfo: ShipInfoData
    invoiceType: number
    invoiceInfo: InvoiceInfoData
    totalAmount: number
    shippingAmount: number
    data: CheckoutProductData[]
    accessToken: string
}

export interface InvoiceInfoData {
    donateId?: string
    invoiceName?: string
    invoiceCityCode?: number
    invoiceAreaCode?: number
    invoiceAddress?: string
    invoiceEmail?: string
    carrierCode?: string
    saveMemberInvoice?: boolean
}

export interface CheckoutProductData {
    pid: string
    cid: string
    sizeName1: string
    sizeName2: string
    payInfo: PayInfoData
}

export interface PayInfoData {
    qty: number
    price: number
    amount: number
}

export interface CheckoutRspData extends Response {
    data: { isRedirect: boolean; paymentUrl: string }
}
