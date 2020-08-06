import { AddressInfoData } from '@/types/apis/addressInfo'

export type State = {
    isFetch: boolean
    addressInfoList: AddressInfoData[]
    error: string
}
