import { GenerateAccessTokenData } from '@/types/apis/generateAccessToken'

export type State = {
    isFetch: boolean
    data: GenerateAccessTokenData
    error: string
}
