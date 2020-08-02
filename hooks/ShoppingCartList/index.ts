import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ShoppingCartListActions } from '@/store'

export const useProductInfo = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            ShoppingCartListActions.fetchShoppingCartList({
                memberId: '1',
                shipType: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch])
}
