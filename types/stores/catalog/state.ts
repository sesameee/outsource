import { CatalogData } from '@/types/apis/catalog'

export type State = {
    isFetch: boolean
    catalogList: CatalogData
    error: string
}
