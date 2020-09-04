import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BannerActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useBanner = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        setIsLoad(true)
        if (isLoad) {
            dispatch(BannerActions.fetchBanner({ isRecommend: 0 }))
        }
    }, [dispatch, i18n.language, isLoad])
}

export const useRecommend = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 1 }))
    }, [dispatch, i18n.language])
}
