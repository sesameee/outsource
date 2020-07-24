import * as GoogleBooksSelectors from './googleBooks/selectors'
import * as BannerSelectors from './banner/selectors'
import * as ChannelListSelectors from './channelList/selectors'
import { googleBookSlice, googleCreateActions } from './googleBooks/slice'
import { bannerSlice, bannerCreateActions } from './banner/slice'
import { channelListSlice, channelListCreateActions } from './channelList/slice'
const GoogleBooksActions = {
    ...googleBookSlice.actions,
    ...googleCreateActions,
}

const BannerActions = {
    ...bannerSlice.actions,
    ...bannerCreateActions,
}

const ChannelListActions = {
    ...channelListSlice.actions,
    ...channelListCreateActions,
}

export {
    GoogleBooksSelectors,
    GoogleBooksActions,
    BannerSelectors,
    BannerActions,
    ChannelListSelectors,
    ChannelListActions,
}
