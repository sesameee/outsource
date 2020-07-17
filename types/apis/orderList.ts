export interface OrderListReqData {
    memberId: string;
    days?: number;
    payType?: number;
    accessToken: string;
}

export interface OrderListRspData {
    orderNo: string;
    prdName: string;
    pay: string;
    invoiceAmount: string;
    txStatus: string;
    txDate: string;
    txType: number;
}