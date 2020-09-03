import { HYDRATE } from 'next-redux-wrapper'
import { of, throwError } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { GenerateAccessTokenActions, UserLoginActions, ErrorAlertActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { GenerateAccessTokenReqData } from '@/types/apis/generateAccessToken'
import { GENERATE_ACCESS_TOKEN } from '@/services/api/apiConfig'
import * as types from '@/store/actionsType'
const NEED_GETREFRESH_ERROR_CODE = '8012'
const NEED_LOGOUT_ERROR_CODE = '8011'
import { i18n } from '@/I18n'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
    action$.pipe(
        ofType(HYDRATE),
        switchMap(() => {
            return of(GenerateAccessTokenActions.reset())
        }),
    )

export const fetchGenerateAccessTokenListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(GenerateAccessTokenActions.fetchGenerateAccessToken),
        switchMap(() =>
            HttpService.PostAsync<GenerateAccessTokenReqData, any>(
                GENERATE_ACCESS_TOKEN,
                {
                    token: state$.value.userLogin.token,
                },
                undefined,
                {
                    headers: {
                        uuid: state$.value.userLogin.uuid,
                    },
                },
            ).pipe(
                mergeMap((res) => {
                    if (res.data.code === NEED_GETREFRESH_ERROR_CODE) {
                        // token 失效需要refresh token
                        console.log('NEED_GETREFRESH_ERROR_CODE :>> ', NEED_GETREFRESH_ERROR_CODE)
                        return throwError(res.data.code)
                    } else if (res.data.code === NEED_LOGOUT_ERROR_CODE) {
                        // token 無效登出
                        return throwError(res.data.code)
                    } else {
                        return of(
                            UserLoginActions.fetchUserLoginSuccess({
                                UserLoginData: res.data,
                            }),
                        )
                    }
                }),
                catchError((error: AxiosError | string) => {
                    if (error === NEED_GETREFRESH_ERROR_CODE) {
                        return of({
                            type: types.FETCH_REFRESH_TOKEN,
                        })
                    }
                    const res = <AxiosError>error
                    return of(
                        UserLoginActions.fetchUserLoginFailure({ error: res.message }),
                        ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: i18n.t('logout') }),
                    )
                }),
                takeUntil(action$.ofType(GenerateAccessTokenActions.stopFetchGenerateAccessToken)),
            ),
        ),
    )

export default [initEpic, fetchGenerateAccessTokenListEpic]
