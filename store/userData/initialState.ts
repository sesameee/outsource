import { State } from 'types/stores/userData/state'
export const initialState: State = {
    isFetch: false,
    data: {
        email: '',
        phone_code: '',
        phone: '',
        is_taiwan: 0,
        address_county: '',
        address_district: '',
        address_string: '',
        address_code: 0,
        name: '',
        taiwan_id: '',
        gender: '',
        birthday: '',
        canModifyParams: [''],
    },
    error: '',
}
