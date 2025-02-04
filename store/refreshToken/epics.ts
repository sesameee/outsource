import { of, throwError } from 'rxjs'
import { switchMap, catchError, takeUntil, take } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { AxiosError } from 'axios'

import { RefreshTokenActions, UserLoginActions, ErrorAlertActions } from '@/store'
import HttpService from '@/services/api/HttpService'
import { REFRESH_TOKEN } from '@/services/api/apiConfig'
import { encodeToken } from '@/utils'
import { v4 as uuidv4 } from 'uuid'
import { UserLoginRspAllData } from '@/types/apis/userLogin'
import { i18n } from '@/I18n'
const NEED_LOGOUT_ERROR_CODE = '8011'

// export const initEpic: Epic = (action$) =>
//     action$.pipe(
//         ofType(HYDRATE),
//         switchMap(() => {
//             return of(RefreshTokenActions.reset())
//         }),
//     )

export const fetchRefreshTokenListEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(RefreshTokenActions.fetchRefreshToken),
        switchMap(() =>
            HttpService.PostAsync<{ content: string }, UserLoginRspAllData>(REFRESH_TOKEN, {
                content: encodeToken(
                    `${state$.value.userLogin.token};${
                        state$.value.userLogin.uuid
                    };${new Date().getTime()};${uuidv4()}`,
                ),
            }).pipe(
                switchMap((res) => {
                    if (res.data.code === NEED_LOGOUT_ERROR_CODE) {
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
                catchError((error: AxiosError) => {
                    return of(
                        UserLoginActions.fetchUserLoginFailure({ error: error.message }),
                        ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: i18n.t('logout') }),
                    )
                }),
                takeUntil(action$.ofType(RefreshTokenActions.stopFetchRefreshToken)),
                take(1),
            ),
        ),
    )
export default [fetchRefreshTokenListEpic]
