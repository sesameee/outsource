export interface ProductInfoReqData {
    cid: string
    pid: string
}

export interface ProductInfoData {
    brandInfo: any
    specName1: string
    specName2: string
    specInfos: any
    pid: string
    cid: string
    mid: string
    tid: string
    imageUrl: string[]
    mName: string
    pName: string
    saleTime: string
    price: number
    listPrice: number
    desc: string
    desc1: string
    desc2: string
    desc3: string
    info: ProductDetailInfoData[]
    breadCrumbs: BreadCrumbData[]
}

export interface ProductInfoRspData extends Response {
    data: ProductInfoData
}

export interface ProductDetailInfoData {
    sizeName1: string
    sizeName2: string
    supPid: string
    barcodeType: string
    stock: string
    orderMax: string
}

export interface BreadCrumbData {
    category: BreadCrumbCategoryData[]
}

export interface BreadCrumbCategoryData {
    cid: string
    name: string
    categoryType: string
    parentCid?: string
    parentCategoryType?: string
    parentCategoryName?: string
    channelBrand: boolean
}
