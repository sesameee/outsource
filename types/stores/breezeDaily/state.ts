import { BreezeDailyData } from '@/types/apis/breezeDaily'

export type State = {
    isFetch: boolean
    breezeDailyList: BreezeDailyData[]
    error: string
}
