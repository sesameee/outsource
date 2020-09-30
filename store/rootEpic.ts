import { createEpicMiddleware, combineEpics } from 'redux-observable'

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
import MemberAddressInfo from './memberAddressInfo/epics'
import Checkout from './checkout/epics'
import AddressInfo from './addressInfo/epics'
import DonateInvoice from './donateInvoice/epics'
import VerifyInvBarCode from './verifyInvBarCode/epics'
import OrderLIst from './orderList/epics'
import OrderDetail from './orderDetail/epics'
import Refund from './refund/epics'
import RefundReason from './refundReason/epics'
import VerifyCode from './verifyCode/epics'
import ResendVerifyCode from './resendVerifyCode/epics'
import UserRegister from './userRegister/epics'
import RegisterUserInfo from './registerUserInfo/epics'
import GenerateAccessToken from './generateAccessToken/epics'
import RefreshToken from './refreshToken/epics'
import ForgotPassword from './forgotPassword/epics'
import ResetPassword from './resetPassword/epics'
import UserSetup from './userSetup/epics'
import UserPoints from './userPoints/epics'
import UserData from './userData/epics'

export const combineAll = combineEpics(
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
    ...MemberAddressInfo,
    ...Checkout,
    ...AddressInfo,
    ...DonateInvoice,
    ...VerifyInvBarCode,
    ...OrderLIst,
    ...OrderDetail,
    ...Refund,
    ...RefundReason,
    ...VerifyCode,
    ...ResendVerifyCode,
    ...UserRegister,
    ...RegisterUserInfo,
    ...GenerateAccessToken,
    ...RefreshToken,
    ...ForgotPassword,
    ...ResetPassword,
    ...UserSetup,
    ...UserPoints,
    ...UserData,
)

const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
