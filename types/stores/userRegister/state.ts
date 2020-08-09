import { UserRegisterData } from '@/types/apis/userRegister'

export type State = {
    isFetch: boolean
    data: UserRegisterData
    error: string
}
