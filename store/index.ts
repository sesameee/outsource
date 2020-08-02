import * as GoogleBooksSelectors from './googleBooks/selectors'
import * as BannerSelectors from './banner/selectors'
import * as CatalogSelectors from './catalog/selectors'
import * as ChannelListSelectors from './channelList/selectors'
import * as BreezeDailySelectors from './breezeDaily/selectors'
import * as UserLoginSelectors from './userLogin/selectors'
import * as ProductInfoSelectors from './productInfo/selectors'
import * as ErrorAlertSelectors from './errorAlert/selectors'
import { googleBookSlice, googleCreateActions } from './googleBooks/slice'
import { bannerSlice, bannerCreateActions } from './banner/slice'
import { catalogSlice, catalogCreateActions } from './catalog/slice'
import { channelListSlice, channelListCreateActions } from './channelList/slice'
import { breezeDailySlice, breezeDailyCreateActions } from './breezeDaily/slice'
import { userLoginSlice, userLoginCreateActions } from './userLogin/slice'
import { productInfoSlice, productInfoCreateActions } from './productInfo/slice'
import { errorAlertSlice } from './errorAlert/slice'

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

const UserLoginActions = {
    ...userLoginSlice.actions,
    ...userLoginCreateActions,
}

const ProductInfoActions = {
    ...productInfoSlice.actions,
    ...productInfoCreateActions,
}

const ErrorAlertActions = {
    ...errorAlertSlice.actions,
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
    UserLoginActions,
    UserLoginSelectors,
    ProductInfoActions,
    ProductInfoSelectors,
    ErrorAlertActions,
    ErrorAlertSelectors,
}
