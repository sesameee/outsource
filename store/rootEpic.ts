import { createEpicMiddleware, combineEpics } from 'redux-observable'

import GoogleBookEpics from './googleBooks/epics'
import BannerEpics from './banner/epics'

export const rootEpic = combineEpics(...GoogleBookEpics, ...BannerEpics)

const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
