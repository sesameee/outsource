import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { ChannelListActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { channelList } from '@/types/apis/channelList'
import { CHANNEL_LIST } from '@/services/api/apiConfig'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(ChannelListActions.reset())
        }),
    )

export const fetchChannelListEpic: Epic = (action$) =>
    action$.pipe(
        ofType(ChannelListActions.fetchChannelList),
        switchMap(() =>
            HttpService.PostAsync<null, channelList>(CHANNEL_LIST).pipe(
                mergeMap((res) => {
                    return of(ChannelListActions.fetchChannelListSuccess({ channelList: res.data }))
                }),
                catchError((error: AxiosError) => {
                    return of(ChannelListActions.fetchChannelListFailure({ error: error.message }))
                }),
                takeUntil(action$.ofType(ChannelListActions.stopFetchChannelList)),
            ),
        ),
    )

export default [initEpic, fetchChannelListEpic]
