import { State } from 'types/stores/orderDetail/state'
export const initialState: State = {
    isFetch: false,
    data: {
        transId: '',
        prdName: '',
        pay: '',
        invoiceAmount: '',
        txStatus: '',
        txDate: '',
        txType: 0,
        invoiceNo: '',
        totalAmount: '',
        discount: '',
        discountType: '',
        points: '',
        shipInfo: {
            receiveAddress: '',
            receiveAreaCode: 0,
            receiveCityCode: 0,
            receiveMobile: '',
            receiveName: '',
            receiveEmail: '',
            shipType: '',
        },
        brandInfos: [],
    },
    error: '',
}
