import { ShoppingCartProductData } from './common';

export interface WishModify {
    action: string;
    memberId: string;
    shoppingCartProductList: ShoppingCartProductData[]
    accessToken: string;
}