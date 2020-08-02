import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { WishListActions } from '@/store'

export const useWishList = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(WishListActions.fetchWishList())
    }, [dispatch])
}
