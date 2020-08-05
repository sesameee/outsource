import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BannerActions, OrderListActions } from '@/store'

export const useBanner = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 0 }))
        dispatch(
            OrderListActions.fetchOrderList({
                memberId: '1',
                days: 1,
                payType: 1,
                accessToken: '1',
            }),
        )
    }, [dispatch])
}

export const useRecommend = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 1 }))
    }, [dispatch])
}
