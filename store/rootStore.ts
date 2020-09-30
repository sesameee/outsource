/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { applyMiddleware, createStore, Middleware } from '@reduxjs/toolkit'

import { createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'

import { combineAll } from '@/store/rootEpic'
import rootReducer from '@/store/rootReducer'
import { RootState } from '@/types/stores/root'
//import { finalize, takeUntil } from 'rxjs/operators'
import { createEpicMiddleware } from 'redux-observable'
import { Subject } from 'rxjs'

const logger = createLogger({ collapsed: true })
const onlyDevMiddlewares = new Array<Middleware>()

if (process.env.NODE_ENV === `development`) {
    onlyDevMiddlewares.push(logger)
}

const configureStore = () => {
    const shutdown$ = new Subject()

    // const rootEpic = (action$: any, state$: any, deps: any) => {
    //     const epic = combineAll
    //     const output$ = epic(action$.pipe(takeUntil(shutdown$)), state$.pipe(takeUntil(shutdown$)), deps)
    //     return output$.pipe(
    //         finalize(() => {
    //             shutdown$.complete()
    //         }),
    //     )
    // }
    const rootEpic = combineAll
    const epicMiddleware = createEpicMiddleware()
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

    epicMiddleware.run(rootEpic)

    // store.subscribe(() => {
    //     const isServer = typeof window === 'undefined'
    //     if (!isServer) {
    //         const stateElement = document.getElementById('__NEXT_DATA__')
    //         //stateElement && (stateElement.innerText = JSON.stringify(store.getState(), null, 2))
    //     }
    // })

    return {
        store,
        shutdownEpics() {
            shutdown$.next()
            return shutdown$.toPromise()
        },
    }
}

export const setupStore = () => {
    const store = configureStore().store
    return store
}

export const makeStore: any = () => {
    const store = setupStore()
    return store
}

export const wrapper = createWrapper<RootState>(makeStore, { debug: false })
