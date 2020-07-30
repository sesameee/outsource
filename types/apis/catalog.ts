import { ProductData } from './common'

export interface CatalogData {
    cid: string
    cName: string
    desc: string
    categoryType: string
    categoryList: CatalogData[]
    total?: number
    cData?: ProductData[]
}

export interface catalogList extends Response {
    data: CatalogData
}

export interface productList {
    [key: string]: ProductData
}
