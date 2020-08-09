import { State } from 'types/stores/userPoints/state'
export const initialState: State = {
    isFetch: false,
    data: {
        totalPoints: 0,
        expiryPoints: 0,
        expiryDate: '1',
    },
    error: '',
}
