import { State } from '@/types/stores/refreshToken/state'
export const initialState: State = {
    isFetch: false,
    data: {
        token: '',
    },
    error: '',
}
