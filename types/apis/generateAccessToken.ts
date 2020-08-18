export interface GenerateAccessTokenReqData {
    token: string
}

export interface GenerateAccessTokenData {
    accessToken: string
    accessTokenExpireDate: string
}

export interface GenerateAccessTokenRspData {
    data: GenerateAccessTokenData
}
