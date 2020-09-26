import { ShoppingCartListData } from '../../apis/common'

export type State = {
    isFetch: boolean
    shoppingCartListData: ShoppingCartListData[]
    shoppingCartListDataCookie: any[]
    error: string
    promoCode: string
}
