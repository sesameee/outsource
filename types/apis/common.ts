export interface ProductData {
    pid: string
    cid: string
    mName?: string
    pName: string
    price: string
    listPrice?: string
    imageUrl: string
}

export interface ShoppingCartProductData {
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
