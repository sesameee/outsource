import { Response } from './common'

export interface RegisterUserInfoReqData {
    memberId: string
    rocId: string
    sex: string
    cityCode: number
    areaCode: number
    address: string
    accessToken: string
}

export type RegisterUserInfoRspData = Response
