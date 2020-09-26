import { State } from 'types/stores/shoppingCartList/state'
export const initialState: State = {
    isFetch: false,
    promoCode: '',
    shoppingCartListData: [],
    shoppingCartListDataCookie: [],
    error: '',
}
