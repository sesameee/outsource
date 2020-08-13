import { combineReducers } from '@reduxjs/toolkit'
import { googleBookSlice } from '@/store/googleBooks/slice'
import { bannerSlice } from '@/store/banner/slice'
import { catalogSlice } from '@/store/catalog/slice'
import { breezeDailySlice } from '@/store/breezeDaily/slice'
import { channelListSlice } from '@/store/channelList/slice'
import { userLoginSlice } from './userLogin/slice'
import { productInfoSlice } from './productInfo/slice'
import { errorAlertSlice } from './errorAlert/slice'
import { wishListSlice } from './wishList/slice'
import { shoppingCartListSlice } from './shoppingCartList/slice'
import { shoppingCartModifySlice } from './shoppingCartModify/slice'
import { wishModifySlice } from './wishModify/slice'
import { promoCodeSlice } from './promoCode/slice'
import { memberAddressInfoSlice } from './memberAddressInfo/slice'
import { checkoutSlice } from './checkout/slice'
import { addressInfoSlice } from './addressInfo/slice'
import { donateInvoiceSlice } from './donateInvoice/slice'
import { verifyInvBarCodeSlice } from './verifyInvBarCode/slice'
import { orderListSlice } from './orderList/slice'
import { orderDetailSlice } from './orderDetail/slice'
import { refundSlice } from './refund/slice'
import { verifyCodeSlice } from './verifyCode/slice'
import { userRegisterSlice } from './userRegister/slice'
import { registerUserInfoSlice } from './registerUserInfo/slice'
import { forgotPasswordSlice } from './forgotPassword/slice'
import { resetPasswordSlice } from './resetPassword/slice'
import { userSetupSlice } from './userSetup/slice'
import { userPointsSlice } from './userPoints/slice'
import { RootState } from '@/types/stores/root'

const rootReducer = combineReducers({
    googleBook: googleBookSlice.reducer,
    banner: bannerSlice.reducer,
    channelList: channelListSlice.reducer,
    catalog: catalogSlice.reducer,
    breezeDaily: breezeDailySlice.reducer,
    userLogin: userLoginSlice.reducer,
    productInfo: productInfoSlice.reducer,
    wishList: wishListSlice.reducer,
    errorAlert: errorAlertSlice.reducer,
    shoppingCartList: shoppingCartListSlice.reducer,
    shoppingCartModify: shoppingCartModifySlice.reducer,
    wishModify: wishModifySlice.reducer,
    promoCode: promoCodeSlice.reducer,
    memberAddressInfo: memberAddressInfoSlice.reducer,
    checkout: checkoutSlice.reducer,
    addressInfo: addressInfoSlice.reducer,
    donateInvoice: donateInvoiceSlice.reducer,
    verifyInvBarCode: verifyInvBarCodeSlice.reducer,
    orderList: orderListSlice.reducer,
    orderDetail: orderDetailSlice.reducer,
    refund: refundSlice.reducer,
    verifyCode: verifyCodeSlice.reducer,
    userRegister: userRegisterSlice.reducer,
    registerUserInfo: registerUserInfoSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    resetPassword: resetPasswordSlice.reducer,
    userSetup: userSetupSlice.reducer,
    userPoints: userPointsSlice.reducer,
})

export default rootReducer
export const rootSelector = (state: RootState): RootState => state
