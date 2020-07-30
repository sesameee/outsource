import { BannerData } from '@/types/apis/banner'

export type State = {
    isFetch: boolean
    bannerList: BannerData[]
    recommendList: BannerData[]
    error: string
}
