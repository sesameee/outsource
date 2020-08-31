import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserLoginActions, UserLoginSelectors, ErrorAlertActions } from '@/store'
import { UserLoginReqData } from '@/types/apis/userLogin'
import { useRouter } from 'next/router'
export const useUserLoginHandler = (): any => {
    const dispatch = useDispatch()
    const handleLoginSubmit = useCallback(
        (data: UserLoginReqData) => {
            dispatch(UserLoginActions.fetchUserLogin(data))
        },
        [dispatch],
    )

    const UseAuthHandle = (): void => {
        const router = useRouter()
        const getUser = useSelector(UserLoginSelectors.getUserLoginData)
        const [parms, setParms] = useState({
            accessToken: getUser.accessToken,
            token: getUser.token,
        })
        useEffect(() => {
            console.log('parms.accessToken :>> ', parms.accessToken)
            console.log('getUser.accessToken :>> ', getUser.accessToken)
            const isNoToken = getUser.accessToken == ''
            if (parms.accessToken != getUser.accessToken) {
                if (getUser.accessToken == '' && getUser.token == '') {
                    console.log('router.pathname :>> ', router.pathname)
                    router.push('/')
                }
                setParms({
                    accessToken: getUser.accessToken,
                    token: getUser.token,
                })
            } else {
                console.log('router.pathnameA :>> ', router.pathname)
                if (router.pathname.indexOf('member') != -1 && isNoToken) {
                    router.push('/')
                }
            }
        }, [getUser.accessToken, getUser.token, parms, router])
    }

    const handleLogout = useCallback(() => {
        dispatch(UserLoginActions.fetchUserLoginFailure({ error: '' }))
        dispatch(ErrorAlertActions.toggleErrorAlert({ isOpen: true, error: '您已登出' }))
    }, [dispatch])
    return { handleLoginSubmit, handleLogout, UseAuthHandle }
}
