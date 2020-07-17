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
