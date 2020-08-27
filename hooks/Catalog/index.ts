import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CatalogActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useCatalog = (cid: string, categoryType: string): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    const [sendParms, setSendParms] = useState({
        cid: '',
        categoryType: '',
    })
    useEffect(() => {
        if (sendParms) {
            dispatch(CatalogActions.fetchCatalog(sendParms))
        }
    }, [dispatch, i18n.language, sendParms])

    useEffect(() => {
        if (cid && categoryType) {
            setSendParms({
                cid,
                categoryType,
            })
        }
    }, [dispatch, cid, categoryType])
}
