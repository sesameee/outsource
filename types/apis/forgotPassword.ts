import { Response } from './common'

export interface ForgotPasswordReqData {
    phone: string
    rocId: string
}

export interface ForgotPasswordData {
    memberId: string
}

export interface ForgotPasswordRspData extends Response {
    data: ForgotPasswordData
}
