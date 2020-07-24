import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as BannerState } from '@/types/stores/banner/state'

export const bannerState = (state: RootState): BannerState => state.banner

// export const getTotalItems = createSelector<RootState, BannerState, number>(bannerState, (bannerState: BannerState) => {
//     return bannerState.bannerList.totalItems
// })

export const getBannerList = createSelector<RootState, BannerState, BannerState['bannerList']>(
    bannerState,
    (bannerState: BannerState) => {
        return bannerState.bannerList
    },
)
