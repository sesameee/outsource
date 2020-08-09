import { UserPointsData } from '@/types/apis/userPoints'

export type State = {
    isFetch: boolean
    data: UserPointsData
    error: string
}
