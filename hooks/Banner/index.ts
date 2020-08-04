import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BannerActions, ShoppingCartListActions } from '@/store'

export const useBanner = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 0 }))
        dispatch(ShoppingCartListActions.fetchShoppingCartList({ memberId: '1', shipType: '1', accessToken: '1' }))
    }, [dispatch])
}

export const useRecommend = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 1 }))
    }, [dispatch])
}
