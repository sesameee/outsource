import * as GoogleBooksSelectors from './googleBooks/selectors'
import * as BannerSelectors from './banner/selectors'
import * as CatalogSelectors from './catalog/selectors'
import * as ChannelListSelectors from './channelList/selectors'
import * as BreezeDailySelectors from './breezeDaily/selectors'
import { googleBookSlice, googleCreateActions } from './googleBooks/slice'
import { bannerSlice, bannerCreateActions } from './banner/slice'
import { catalogSlice, catalogCreateActions } from './catalog/slice'
import { channelListSlice, channelListCreateActions } from './channelList/slice'
import { breezeDailySlice, breezeDailyCreateActions } from './breezeDaily/slice'
const GoogleBooksActions = {
    ...googleBookSlice.actions,
    ...googleCreateActions,
}

const BannerActions = {
    ...bannerSlice.actions,
    ...bannerCreateActions,
}

const CatalogActions = {
    ...catalogSlice.actions,
    ...catalogCreateActions,
}

const ChannelListActions = {
    ...channelListSlice.actions,
    ...channelListCreateActions,
}

const BreezeDailyActions = {
    ...breezeDailySlice.actions,
    ...breezeDailyCreateActions,
}

export {
    GoogleBooksSelectors,
    GoogleBooksActions,
    BannerSelectors,
    BannerActions,
    ChannelListSelectors,
    ChannelListActions,
    CatalogActions,
    CatalogSelectors,
    BreezeDailyActions,
    BreezeDailySelectors,
}
