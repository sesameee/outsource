export interface BreezeDailyData {
    desc: string
    imageUrl: string
    linkUrl: string
}

export interface breezeDailyList extends Response {
    data: BreezeDailyData[]
}