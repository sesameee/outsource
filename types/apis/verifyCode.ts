import { Response } from "./common";

export interface VerifyCodeReqData {
    memberId: string
    code: string
}

export interface VerifyCodeData {
    token: string
    accessToken: string
    accessTokenExpireDate: string
}

export interface VerifyCodeRspData extends Response {
    data: VerifyCodeData
}
