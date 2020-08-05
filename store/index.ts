import * as GoogleBooksSelectors from './googleBooks/selectors'
import * as BannerSelectors from './banner/selectors'
import * as CatalogSelectors from './catalog/selectors'
import * as ChannelListSelectors from './channelList/selectors'
import * as BreezeDailySelectors from './breezeDaily/selectors'
import * as UserLoginSelectors from './userLogin/selectors'
import * as ProductInfoSelectors from './productInfo/selectors'
import * as ErrorAlertSelectors from './errorAlert/selectors'
import * as WishListSelectors from './wishList/selectors'
import * as ShoppingCartListSelectors from './shoppingCartList/selectors'
import * as ShoppingCartModifySelectors from './shoppingCartModify/selectors'
import * as WishModifySelectors from './wishModify/selectors'
import * as PromoCodeSelectors from './promoCode/selectors'
import * as MemberAddressInfoSelectors from './memberAddressInfo/selectors'
import * as CheckoutSelectors from './checkout/selectors'
import * as AddressInfoSelectors from './addressInfo/selectors'
import * as DonateInvoiceSelectors from './donateInvoice/selectors'
import { googleBookSlice, googleCreateActions } from './googleBooks/slice'
import { bannerSlice, bannerCreateActions } from './banner/slice'
import { catalogSlice, catalogCreateActions } from './catalog/slice'
import { channelListSlice, channelListCreateActions } from './channelList/slice'
import { breezeDailySlice, breezeDailyCreateActions } from './breezeDaily/slice'
import { userLoginSlice, userLoginCreateActions } from './userLogin/slice'
import { productInfoSlice, productInfoCreateActions } from './productInfo/slice'
import { errorAlertSlice } from './errorAlert/slice'
import { wishListSlice, wishListCreateActions } from './wishList/slice'
import { shoppingCartListSlice, shoppingCartListCreateActions } from './shoppingCartList/slice'
import { shoppingCartModifySlice, shoppingCartModifyCreateActions } from './shoppingCartModify/slice'
import { wishModifySlice, wishModifyCreateActions } from './wishModify/slice'
import { promoCodeSlice, promoCodeCreateActions } from './promoCode/slice'
import { memberAddressInfoSlice, memberAddressInfoCreateActions } from './memberAddressInfo/slice'
import { checkoutSlice, checkoutCreateActions } from './checkout/slice'
import { addressInfoSlice, addressInfoCreateActions } from './addressInfo/slice'
import { donateInvoiceSlice, donateInvoiceCreateActions } from './donateInvoice/slice'

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

const WishListActions = {
    ...wishListSlice.actions,
    ...wishListCreateActions,
}

const ShoppingCartListActions = {
    ...shoppingCartListSlice.actions,
    ...shoppingCartListCreateActions,
}

const ShoppingCartModifyActions = {
    ...shoppingCartModifySlice.actions,
    ...shoppingCartModifyCreateActions,
}

const WishModifyActions = {
    ...wishModifySlice.actions,
    ...wishModifyCreateActions,
}

const PromoCodeActions = {
    ...promoCodeSlice.actions,
    ...promoCodeCreateActions,
}

const MemberAddressInfoActions = {
    ...memberAddressInfoSlice.actions,
    ...memberAddressInfoCreateActions,
}

const CheckoutActions = {
    ...checkoutSlice.actions,
    ...checkoutCreateActions,
}

const AddressInfoActions = {
    ...addressInfoSlice.actions,
    ...addressInfoCreateActions,
}

const DonateInvoiceActions = {
    ...donateInvoiceSlice.actions,
    ...donateInvoiceCreateActions,
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
    WishListActions,
    WishListSelectors,
    ShoppingCartListActions,
    ShoppingCartListSelectors,
    ShoppingCartModifyActions,
    ShoppingCartModifySelectors,
    WishModifyActions,
    WishModifySelectors,
    PromoCodeActions,
    PromoCodeSelectors,
    MemberAddressInfoActions,
    MemberAddressInfoSelectors,
    CheckoutActions,
    CheckoutSelectors,
    AddressInfoActions,
    AddressInfoSelectors,
    DonateInvoiceActions,
    DonateInvoiceSelectors,
}
