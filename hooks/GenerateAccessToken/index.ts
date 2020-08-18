import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GenerateAccessTokenActions } from '@/store'

export const useGenerateAccessToken = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GenerateAccessTokenActions.fetchGenerateAccessToken())
    }, [dispatch])
}
