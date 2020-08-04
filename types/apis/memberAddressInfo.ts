import { Response } from './common'

export interface MemberAddressInfoReqData {
    memberId: string
    category: number
    accessToken: string
}

export interface MemberAddressInfoData {
    addressInfoId: number
    category: number
    name?: string
    cityCode?: number
    areaCode?: number
    address?: string
    tel?: string
    mobile?: string
    email?: string
    isDefault: boolean
}

export interface MemberAddressInfoRspData extends Response {
    data: MemberAddressInfoData[]
}
