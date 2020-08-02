import { ShoppingCartListData } from '../../apis/common'

export type State = {
    isFetch: boolean
    shoppingCartListData: ShoppingCartListData[]
    error: string
}
