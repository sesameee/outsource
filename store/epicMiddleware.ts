import { of, throwError } from 'rxjs'
import { ErrorAlertActions, UserLoginActions } from '.'
import { AxiosError } from 'axios'
import { ofType } from 'redux-observable'
import { take, mergeMap, startWith } from 'rxjs/operators'

/**
 * API success handle
 * @param res {}
 * @param fn epic action
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const epicSuccessMiddleware = (res: any, fn: any, fn2?: any) => {
    console.log('res.data.code :>> ', res.data.code)
    if (res.data.code === '0000') {
        return fn2 ? of(fn, fn2) : of(fn)
    } else if (res.data.code === '8012' || res.data.code === '8013') {
        console.log('8013 :>> ')
        return throwError(res.data.code)
    } else {
        return of(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: res.data.message }))
    }
}

/**
 * API Auth error handle
 * @param res {}
 * @param fn epic action
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const epicAuthFailMiddleware = (error: AxiosError | string, fn: any) => {
    if (error === '8013') {
        return of(UserLoginActions.fetchUserLoginFailure({ error: error }))
    } else if (error === '8012') {
        //  登出
        return of(
            UserLoginActions.fetchUserLoginFailure({ error: error }),
            ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已登出' }),
        )
    } else {
        return of(fn)
    }
}

export const requireValidToken = (action$: any, state$: any, callback: any) => {
    if (state$.value.userLogin.error == '8013') {
        return action$.pipe(
            ofType(UserLoginActions.fetchUserLoginSuccess),
            take(1),
            mergeMap(() => {
                return callback(state$.value.userLogin.accessToken)
            }),
            startWith({ type: 'FETCH_GENERATE_ACCESS_TOKEN' }),
        )
    } else {
        return callback(state$.value.userLogin.accessToken)
    }
}
