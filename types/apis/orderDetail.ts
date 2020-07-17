import { ShipInfoData, ShoppingCartProductData } from './common'

export interface OrderDetailReqData {
    memberId: string
    orderNo: string
    accessToken: string
}

export interface OrderDetailRspData {
    orderNo: string
    pid: string
    pName: string
    pay: number
    txStatus: string
    txStatusCode: string
    txDate: string
    invoiceAmount: number
    totalAmount: number
    shipInfo: ShipInfoData
    brandInfos: BrandInfoData[]
    canRefund: boolean
}

export interface BrandInfoData {
    cid: string
    name: string
    categoryType: string
    orderProducts: ShoppingCartProductData[]
}
