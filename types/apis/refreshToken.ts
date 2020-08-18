export interface RefreshTokenReqData {
    content: string
}

export interface RefreshTokenData {
    token: string
}

export interface RefreshTokenRspData {
    data: RefreshTokenData
}
