import { Response } from './common'

export interface userDataReqData {
    memberId: string
    accessToken: string
}

export interface userDataData {
    email: string
    phone_code: string
    phone: string
    is_taiwan: number
    address_county: string
    address_district: string
    address_code: number
    name: string
    taiwan_id: string
    gender: string
    birthday: string
    canModifyParams: string[]
}

export interface userDataRspData extends Response {
    data: userDataData
}
