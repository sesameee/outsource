import { Response, ShoppingCartListData } from './common'

export interface ShoppingCartListReqData {
    memberId: string
    shipType: string
    accessToken: string
    promoCode?: string
}

export interface ShoppingCartListRspData extends Response {
    data: ShoppingCartListData[]
}
