import { ForgotPasswordData } from '@/types/apis/forgotPassword'

export type State = {
    isFetch: boolean
    data: ForgotPasswordData
    error: string
}
