import { State } from 'types/stores/productInfo/state'
export const initialState: State = {
    isFetch: false,
    productInfoData: {
        pid: '',
        cid: '',
        mid: '',
        tid: '',
        imageUrl: [],
        mName: '',
        pName: '',
        saleTime: '',
        price: 0,
        listPrice: 0,
        desc: '',
        desc1: '',
        desc2: '',
        desc3: '',
        info: [],
        breadCrumbs: [],
        specInfos: [],
    },
    error: '',
}
