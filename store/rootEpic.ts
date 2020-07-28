import { createEpicMiddleware, combineEpics } from 'redux-observable'

import GoogleBookEpics from './googleBooks/epics'
import BannerEpics from './banner/epics'
import ChannelEpics from './channelList/epics'
import CatalogEpics from './catalog/epics'

export const rootEpic = combineEpics(...GoogleBookEpics, ...BannerEpics, ...ChannelEpics, ...CatalogEpics)

const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
