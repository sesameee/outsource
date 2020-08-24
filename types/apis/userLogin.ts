import { Response } from './common'
export interface UserLoginReqData {
    phoneCode: string
    phone: string
    password: string
}

export interface UserLoginRspData {
    memberId: string
    token?: string
    accessToken?: string
    accessTokenExpireDate?: string
    userId?: string
}

export interface UserLoginRspAllData extends Response {
    data: UserLoginRspData
}
