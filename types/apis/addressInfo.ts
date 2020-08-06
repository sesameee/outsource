import { Response } from "./common";

export interface AddressInfoData {
    cityCode: number
    cityName: string
    areas: AreaData[]
}

export interface AreaData {
    areaCode: number
    areaName: string
    zipCode: number
}

export interface AddressInfoRspData extends Response {
    data: AddressInfoData[]
}