import { State } from 'types/stores/catalog/state'
export const initialState: State = {
    isFetch: false,
    catalogList: {
        cid: '',
        cName: '',
        desc: '',
        categoryType: '',
        categoryList: [],
    },
    error: '',
}
