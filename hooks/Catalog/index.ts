import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CatalogActions } from '@/store'

export const useCatalog = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CatalogActions.fetchCatalog())
    }, [dispatch])
}
