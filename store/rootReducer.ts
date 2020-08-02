import { combineReducers } from '@reduxjs/toolkit'
import { googleBookSlice } from '@/store/googleBooks/slice'
import { bannerSlice } from '@/store/banner/slice'
import { catalogSlice } from '@/store/catalog/slice'
import { breezeDailySlice } from '@/store/breezeDaily/slice'
import { channelListSlice } from '@/store/channelList/slice'
import { userLoginSlice } from './userLogin/slice'
import { RootState } from '@/types/stores/root'

const rootReducer = combineReducers({
    googleBook: googleBookSlice.reducer,
    banner: bannerSlice.reducer,
    channelList: channelListSlice.reducer,
    catalog: catalogSlice.reducer,
    breezeDaily: breezeDailySlice.reducer,
    userLogin: userLoginSlice.reducer,
})

export default rootReducer
export const rootSelector = (state: RootState): RootState => state
