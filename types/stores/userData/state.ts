import { userDataData } from '@/types/apis/userData'

export type State = {
    isFetch: boolean
    data: userDataData
    error: string
}
