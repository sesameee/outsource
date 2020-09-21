import { State } from 'types/stores/checkout/state'
export const initialState: State = {
    isFetch: false,
    message: '',
    error: '',
    data: {
        isRedirect: false,
        paymentUrl: '',
    },
}
