import { Response } from './common'

export interface UserRegisterReqData {
    name: string
    phoneCode: string
    phone: string
    email: string
    pwd1: string
    pwd2: string
    registerFrom: string
    rocId: string
}

export interface UserRegisterData {
    memberId: string
}

export interface UserRegisterRspData extends Response {
    data: UserRegisterData
}
