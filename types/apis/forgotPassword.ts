import { Response } from './common'

export interface ForgotPasswordReqData {
    phone: string
    rocId: string
}

export interface ForgotPasswordData {
    memberId: string
    success: boolean
}

export interface ForgotPasswordRspData extends Response {
    data: ForgotPasswordData
}
