import { Response } from './common'

export interface UserPointsReqData {
    memberId: string
    accessToken: string
}

export interface UserPointsData {
    totalPoints: number
    expiryPoints: number
    expiryDate: string
}

export interface UserPointsRspData extends Response {
    data: UserPointsData
}
