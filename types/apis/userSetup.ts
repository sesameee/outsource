import { Response } from './common'

export interface UserSetupReqData {
    memberId: string
    email: string
    cityCode: number
    areaCode: number
    address: string
    accessToken: string
}

export type UserSetupRspData = Response
