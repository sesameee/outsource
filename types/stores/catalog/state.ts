import { CatalogData, productList } from '@/types/apis/catalog'

export type State = {
    isFetch: boolean
    catalogList: CatalogData
    productList: productList
    error: string
}
