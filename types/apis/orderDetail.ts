import { ShipInfoData, ShoppingCartProductData, Response } from './common'

export interface OrderDetailReqData {
    memberId: string
    transId: string
    accessToken: string
}

export interface BrandInfoData {
    orderId: string
    orderStatus: string
    cid: string
    categoryType: string
    name: string
    txStatusCode: string
    shippingStatus: string
    canRefund: boolean
    orderProducts: ShoppingCartProductData[]
}

export interface OrderDetailData {
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
    shipInfo: ShipInfoData
    brandInfos: BrandInfoData[]
}

export interface OrderDetailRspData extends Response {
    data: OrderDetailData
}
