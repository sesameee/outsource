import { RefreshTokenData } from '@/types/apis/refreshToken'

export type State = {
    isFetch: boolean
    data: RefreshTokenData
    error: string
}
