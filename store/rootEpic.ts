import { createEpicMiddleware, combineEpics } from 'redux-observable'

import GoogleBookEpics from './googleBooks/epics'
import BannerEpics from './banner/epics'
import ChannelEpics from './channelList/epics'
import CatalogEpics from './catalog/epics'
import BreezDailyEpics from './breezeDaily/epics'
import UserLoginEpics from './userLogin/epics'
import ProductInfoEpics from './productInfo/epics'
import WishListEpics from './wishList/epics'
import ShoppingCartListEpics from './shoppingCartList/epics'
import ShoppingCartModifyEpics from './shoppingCartModify/epics'
import WishModifyEpics from './wishModify/epics'
import PromoCodeEpics from './promoCode/epics'

export const rootEpic = combineEpics(
    ...GoogleBookEpics,
    ...BannerEpics,
    ...ChannelEpics,
    ...CatalogEpics,
    ...BreezDailyEpics,
    ...UserLoginEpics,
    ...ProductInfoEpics,
    ...WishListEpics,
    ...ShoppingCartListEpics,
    ...ShoppingCartModifyEpics,
    ...WishModifyEpics,
    ...PromoCodeEpics,
)

const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
