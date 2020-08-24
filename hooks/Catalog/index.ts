import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CatalogActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useCatalog = (id: string, categoryType: string): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CatalogActions.fetchCatalog({ cid: id, categoryType }))
    }, [dispatch, i18n.language, id, categoryType])
}
