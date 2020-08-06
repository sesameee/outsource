import { MemberAddressInfoData } from '@/types/apis/memberAddressInfo'

export type State = {
    isFetch: boolean
    data: MemberAddressInfoData[]
    error: string
}
