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
})

export default rootReducer
export const rootSelector = (state: RootState): RootState => state
