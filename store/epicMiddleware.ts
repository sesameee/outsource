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
        console.log('epicAuthFailMiddleware :>> ')
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

// export const genericRetryStrategy = ({
//     maxRetryAttempts = 3,
//     scalingDuration = 1000,
//     excludedStatusCodes = [],
// }: {
//     maxRetryAttempts?: number
//     scalingDuration?: number
//     excludedStatusCodes?: number[]
//     tokenIsNew?: boolean
// } = {}) => (attempts: Observable<any>) => {
//     return attempts.pipe(
//         mergeMap((error, i) => {
//             const retryAttempt = i + 1
//             // if maximum number of retries have been met
//             // or response is a status code we don't wish to retry, throw error

//             if (retryAttempt > maxRetryAttempts || excludedStatusCodes.find((e) => e === error.status)) {
//                 return throwError(error)
//             }
//             console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`)
//             // retry after 1s, 2s, etc...
//             return timer(retryAttempt * scalingDuration)
//         }),
//         finalize(() => console.log('We are done!')),
//     )
// }
