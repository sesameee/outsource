export interface UserLoginReqData {
    phoneCode: string;
    phone: string;
    password: string;
}

export interface UserLoginRspData {
    memberId: string;
}