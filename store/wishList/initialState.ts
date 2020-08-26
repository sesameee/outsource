import { State } from '@/types/stores/wishList/state'
export const initialState: State = {
    isFetch: false,
    cid: '',
    name: '',
    categoryType: '',
    total: 0,
    data: [],
    wishListCookie: [],
    error: '',
}
