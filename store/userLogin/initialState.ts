import { State } from 'types/stores/userLogin/state'
export const initialState: State = {
    isFetch: false,
    userLoginData: {
        memberId: '',
        token: '',
        accessToken: '',
        accessTokenExpireDate: '',
    },
    error: '',
}
