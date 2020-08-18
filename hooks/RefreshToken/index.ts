import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { RefreshTokenActions } from '@/store'

export const useRefreshToken = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RefreshTokenActions.fetchRefreshToken())
    }, [dispatch])
}
