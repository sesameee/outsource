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
import * as VerifyInvBarCodeSelectors from './verifyInvBarCode/selectors'
import * as OrderListSelectors from './orderList/selectors'
import * as OrderDetailSelectors from './orderDetail/selectors'
import * as RefundSelectors from './refund/selectors'
import * as RefundReasonSelectors from './refundReason/selectors'
import * as VerifyCodeSelectors from './verifyCode/selectors'
import * as UserRegisterSelectors from './userRegister/selectors'
import * as RegisterUserInfoSelectors from './registerUserInfo/selectors'
import * as GenerateAccessTokenSelectors from './generateAccessToken/selectors'
import * as RefreshTokenSelectors from './refreshToken/selectors'
import * as ForgotPasswordSelectors from './forgotPassword/selectors'
import * as ResetPasswordSelectors from './resetPassword/selectors'
import * as UserSetupSelectors from './userSetup/selectors'
import * as UserPointsSelectors from './userPoints/selectors'
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
import { verifyInvBarCodeSlice, verifyInvBarCodeCreateActions } from './verifyInvBarCode/slice'
import { orderListSlice, orderListCreateActions } from './orderList/slice'
import { orderDetailSlice, orderDetailCreateActions } from './orderDetail/slice'
import { refundSlice, refundCreateActions } from './refund/slice'
import { refundReasonSlice, refundReasonCreateActions } from './refundReason/slice'
import { verifyCodeSlice, verifyCodeCreateActions } from './verifyCode/slice'
import { userRegisterSlice, userRegisterCreateActions } from './userRegister/slice'
import { registerUserInfoSlice, registerUserInfoCreateActions } from './registerUserInfo/slice'
import { generateAccessTokenSlice, generateAccessTokenCreateActions } from './generateAccessToken/slice'
import { refreshTokenSlice, refreshTokenCreateActions } from './refreshToken/slice'
import { forgotPasswordSlice, forgotPasswordCreateActions } from './forgotPassword/slice'
import { resetPasswordSlice, resetPasswordCreateActions } from './resetPassword/slice'
import { userSetupSlice, userSetupCreateActions } from './userSetup/slice'
import { userPointsSlice, userPointsCreateActions } from './userPoints/slice'

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

const VerifyInvBarCodeActions = {
    ...verifyInvBarCodeSlice.actions,
    ...verifyInvBarCodeCreateActions,
}

const OrderListActions = {
    ...orderListSlice.actions,
    ...orderListCreateActions,
}

const OrderDetailActions = {
    ...orderDetailSlice.actions,
    ...orderDetailCreateActions,
}

const RefundActions = {
    ...refundSlice.actions,
    ...refundCreateActions,
}

const RefundReasonActions = {
    ...refundReasonSlice.actions,
    ...refundReasonCreateActions,
}

const VerifyCodeActions = {
    ...verifyCodeSlice.actions,
    ...verifyCodeCreateActions,
}

const UserRegisterActions = {
    ...userRegisterSlice.actions,
    ...userRegisterCreateActions,
}

const RegisterUserInfoActions = {
    ...registerUserInfoSlice.actions,
    ...registerUserInfoCreateActions,
}

const GenerateAccessTokenActions = {
    ...generateAccessTokenSlice.actions,
    ...generateAccessTokenCreateActions,
}

const RefreshTokenActions = {
    ...refreshTokenSlice.actions,
    ...refreshTokenCreateActions,
}

const ForgotPasswordActions = {
    ...forgotPasswordSlice.actions,
    ...forgotPasswordCreateActions,
}

const ResetPasswordActions = {
    ...resetPasswordSlice.actions,
    ...resetPasswordCreateActions,
}

const UserSetupActions = {
    ...userSetupSlice.actions,
    ...userSetupCreateActions,
}

const UserPointsActions = {
    ...userPointsSlice.actions,
    ...userPointsCreateActions,
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
    VerifyInvBarCodeActions,
    VerifyInvBarCodeSelectors,
    OrderListActions,
    OrderListSelectors,
    OrderDetailActions,
    OrderDetailSelectors,
    RefundActions,
    RefundSelectors,
    RefundReasonActions,
    RefundReasonSelectors,
    VerifyCodeActions,
    VerifyCodeSelectors,
    UserRegisterActions,
    UserRegisterSelectors,
    RegisterUserInfoActions,
    RegisterUserInfoSelectors,
    GenerateAccessTokenActions,
    GenerateAccessTokenSelectors,
    RefreshTokenActions,
    RefreshTokenSelectors,
    ForgotPasswordActions,
    ForgotPasswordSelectors,
    ResetPasswordActions,
    ResetPasswordSelectors,
    UserSetupActions,
    UserSetupSelectors,
    UserPointsActions,
    UserPointsSelectors,
}
