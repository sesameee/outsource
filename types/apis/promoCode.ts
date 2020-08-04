import { Response } from "./common";

export interface PromoCodeReqData {
    promoCode: string
    memberId: string
    pid: string[]
    accessToken: string
}

export interface PromoCodeRspData extends Response {
    name: string
    discountPercent: string
    discountRate: string
    data: string[]
}
