export type JSObject = { [p: string]: any }

export enum FilterType {
    PRICE_ASCENDING = 0,
    PRICE_DESCENDING = 1,
    TIME_NEW_TO_OLD = 2,
    TIME_OLD_TO_NEW = 3,
}

export interface TPDirect extends Window {
    TPDirect: any
}

export interface Opera extends Window {
    opera: any
}
