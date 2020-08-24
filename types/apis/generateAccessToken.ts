import { Response } from './common'
export interface GenerateAccessTokenReqData {
    token: string
}

export interface GenerateAccessTokenData {
    accessToken: string
    accessTokenExpireDate: string
}

export interface GenerateAccessTokenRspData extends Response {
    data: GenerateAccessTokenData
}
