import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ShoppingCartListActions } from '@/store'

export const useShoppingCartList = (): void => {
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
