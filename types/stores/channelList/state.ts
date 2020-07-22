import { ChannelData } from '@/types/apis/channelList'

export type State = {
    isFetch: boolean
    channelList: ChannelData[]
    error: string
}
