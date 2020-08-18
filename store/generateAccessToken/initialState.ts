import { State } from '@/types/stores/generateAccessToken/state'
export const initialState: State = {
    isFetch: false,
    data: {
        accessToken: '',
        accessTokenExpireDate: '',
    },
    error: '',
}
