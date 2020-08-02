import { UserLoginReqData } from '@/types/apis/userLogin'

export type State = {
    isFetch: boolean
    userLoginData: UserLoginReqData
    error: string
}
