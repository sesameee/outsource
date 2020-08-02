import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BannerActions, UserLoginActions } from '@/store'

export const useBanner = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 0 }))
    }, [dispatch])
}

export const useRecommend = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 1 }))
    }, [dispatch])
}


export const useUserLogin = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            UserLoginActions.fetchUserLogin({
                phoneCode: '886',
                phone: '9283929292',
                password: '219219',
            }),
        )
    }, [dispatch])
}
