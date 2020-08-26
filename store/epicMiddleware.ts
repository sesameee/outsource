import { of, throwError, empty } from 'rxjs'
import { ErrorAlertActions } from '.'
import { AxiosError } from 'axios'
import { deleteCookie } from '@/utils'

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
        return of({
            type: 'FETCH_GENERATE_ACCESS_TOKEN',
        })
    } else if (error === '8012') {
        deleteCookie('accessToken')
        deleteCookie('token')
        return empty
    } else {
        return of(fn)
    }
}
