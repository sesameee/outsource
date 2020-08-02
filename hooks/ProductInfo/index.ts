import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ProductInfoActions } from '@/store'

export const useUserLogin = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            ProductInfoActions.fetchProductInfo({
                cid: '1',
                pid: '1',
            }),
        )
    }, [dispatch])
}
