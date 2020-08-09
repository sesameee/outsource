import { Response } from './common'

export interface ResetPasswordReqData {
    memberId: string
    phone: string
    pwd1: string
    pwd2: string
    type: number
}

export type ResetPasswordRspData = Response
