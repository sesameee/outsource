import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/stores/root'
import { State as ChannelListState } from '@/types/stores/channelList/state'

export const channelListState = (state: RootState): ChannelListState => state.channelList

// export const getTotalItems = createSelector<RootState, ChannelListState, number>(channelListState, (channelListState: ChannelListState) => {
//     return channelListState.channelListList.totalItems
// })

export const getChannelList = createSelector<RootState, ChannelListState, ChannelListState['channelList']>(
    channelListState,
    (channelListState: ChannelListState) => {
        return channelListState.channelList
    },
)
