import { State } from '@/types/stores/verifyCode/state'
export const initialState: State = {
    isFetch: false,
    data: {
        token: '',
        accessToken: '',
        accessTokenExpireDate: '',
    },
    error: '',
}
