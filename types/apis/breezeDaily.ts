export interface BreezeDailyData {
    desc: string
    imageUrl: string
    linkUrl: string
}

export interface BreezeDailyDataList extends Response {
    data: BreezeDailyData[]
}
