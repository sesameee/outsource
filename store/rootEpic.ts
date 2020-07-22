import { createEpicMiddleware, combineEpics } from 'redux-observable'

import GoogleBookEpics from './googleBooks/epics'
import BannerEpics from './banner/epics'
import ChannelEpics from './channelList/epics'

export const rootEpic = combineEpics(...GoogleBookEpics, ...BannerEpics, ...ChannelEpics)

const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
