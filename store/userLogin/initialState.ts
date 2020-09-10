import { State } from 'types/stores/userLogin/state'
export const initialState: State = {
    isFetch: false,
    isLogin: false,
    memberId: '',
    token: '',
    accessToken: '',
    accessTokenExpireDate: '',
    userId: '',
    error: '',
    uuid: '',
}
