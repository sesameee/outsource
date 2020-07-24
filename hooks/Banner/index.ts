import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BannerActions } from '@/store'

export const useBanner = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner())
    }, [dispatch])
}
