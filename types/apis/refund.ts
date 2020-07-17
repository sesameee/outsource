export interface RefundReqData {
    memberId: string;
    orderNo: string;
    reason: string;
    memo: string;
    accessToken: string;
}

export interface RefundRspData {
    message: string;
}