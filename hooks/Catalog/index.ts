import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CatalogActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useCatalog = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CatalogActions.fetchCatalog())
    }, [dispatch, i18n.language])
}
