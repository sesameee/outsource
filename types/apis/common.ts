export interface ProductData {
    shoppingCartItemId: number
    pid: string
    cid: string
    mName?: string
    pName: string
    price: string
    listPrice?: string
    imageUrl: string
    _id: string
    _cName?: string
    _link?: string
    _categoryType?: string
    _cid?: string
    onlineDate: string
}

export interface ShoppingCartListData {
    cid: string
    name: string
    categoryType: string
    shoppingCartProducts: ShoppingCartProductData[]
}

export interface ShoppingCartProductData {
    discountAmount: any
    pName?: string
    shoppingCartItemId?: number
    cid: string
    pid: string
    price?: number
    qty?: number
    productName?: string
    imageUrl?: string
    orderMax?: number
    stock?: number
    spec1?: string
    spec2?: string
}

export interface WishProductData {
    shoppingWishItemId?: number
    cid: string
    pid: string
    price?: number
    qty?: number
    productName?: string
    imageUrl?: string
    orderMax?: number
    stock?: number
    spec1?: string
    spec2?: string
}

export interface ShoppingCartProductDataTrans extends ShoppingCartProductData {
    eventName?: string
    _cid: string
    _name: string
    _categoryType: string
}

export interface ShipInfoData {
    displayName?: string
    receiveAddress: string
    receiveAreaCode: number
    receiveCityCode: number
    receiveMobile: string
    receiveName: string
    receiveEmail: string
    receiveMemo?: string
    shipType: string
    shippingStatus?: string
}

export type Response = {
    /**
     * @examples ["0000"]
     */
    code: string
    /**
     * @examples ["成功"]
     */
    message: string
}
