import { Response } from './common'

export interface ResendVerifyCodeReqData {
    memberId: string
    action: string
}

export type ResendVerifyCodeRspData = Response
