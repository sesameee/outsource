import { Response } from "./common";

export interface VerifyInvBarCodeReqData {
    memberId: string
    barCode: string
    accessToken: string
}

export interface VerifyInvBarCodeRspData extends Response {}
