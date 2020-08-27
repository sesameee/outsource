import { Response } from './common'
export interface RefreshTokenReqData {
    content: string
}

export interface RefreshTokenData {
    token: string
}

export interface RefreshTokenRspData extends Response {
    data: RefreshTokenData
}
