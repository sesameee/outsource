import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ProductInfoActions } from '@/store'

export const useProductInfo = (query: any): void => {
    const dispatch = useDispatch()
    const [cid, pid] = query.id
    useEffect(() => {
        if (cid && pid) {
            dispatch(
                ProductInfoActions.fetchProductInfo({
                    cid,
                    pid,
                }),
            )
        }
    }, [dispatch, cid, pid])
}
