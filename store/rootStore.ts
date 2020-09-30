/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { applyMiddleware, createStore, Middleware } from '@reduxjs/toolkit'

import { createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'

import { rootEpic } from '@/store/rootEpic'
import rootReducer from '@/store/rootReducer'
import { RootState } from '@/types/stores/root'
import { finalize, takeUntil } from 'rxjs/operators'
import { createEpicMiddleware } from 'redux-observable'
import { Subject } from 'rxjs'

const logger = createLogger({ collapsed: true })
const onlyDevMiddlewares = new Array<Middleware>()

if (process.env.NODE_ENV === `development`) {
    onlyDevMiddlewares.push(logger)
}

const configureStore = () => {
    const shutdown$ = new Subject()
    const serverRootEpic = (action$: any, state$: any, deps: any) => {
        const output$ = rootEpic(action$.pipe(takeUntil(shutdown$)), state$, deps)
        return output$.pipe(
            finalize(() => {
                const isServer = typeof window === 'undefined'
                if (isServer) {
                    shutdown$.complete()
                }
            }),
        )
    }

    const epicMiddleware = createEpicMiddleware()
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

    epicMiddleware.run(serverRootEpic)

    return {
        store,
        shutdownEpics() {
            shutdown$.next()
            return shutdown$.toPromise()
        },
    }
}

export const makeStore: any = () => {
    const store = configureStore().store
    return store
}

export const wrapper = createWrapper<RootState>(makeStore, { debug: false })
