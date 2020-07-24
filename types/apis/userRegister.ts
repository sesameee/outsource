export interface UserRegisterReqData {
    name: string
    phoneCode: string
    phone: string
    email: string
    pwd1: string
    pwd2: string
    registerFrom: string
}

export interface UserRegisterRspData {
    memberId: string
}
