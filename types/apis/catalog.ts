import { ProductData } from './common';

export interface CatalogData {
    cid: string;
    cName: string;
    desc: string;
    categoryType: string;
    categoryList: CatalogData[];
    total?: number;
    cData?: ProductData[];
}