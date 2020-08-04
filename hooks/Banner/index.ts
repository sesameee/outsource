import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BannerActions, MemberAddressInfoActions } from '@/store'

export const useBanner = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 0 }))
        dispatch(MemberAddressInfoActions.fetchMemberAddressInfo({ memberId: '1', category: 1, accessToken: '1' }))
    }, [dispatch])
}

export const useRecommend = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 1 }))
    }, [dispatch])
}
