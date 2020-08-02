import { UserLoginRspData } from '@/types/apis/userLogin'

export type State = {
    isFetch: boolean
    userLoginData: UserLoginRspData
    error: string
}
