import { State } from 'types/stores/forgotPassword/state'
export const initialState: State = {
    isFetch: false,
    data: {
        memberId: '',
    },
    error: '',
}
