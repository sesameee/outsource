import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { ProductInfoActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useProductInfo = (query: any): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    const [cid, pid] = query.id
    const [sendParms, setSendParms] = useState({
        cid: '',
        pid: '',
    })
    useEffect(() => {
        if (sendParms.cid && sendParms.pid) {
            dispatch(ProductInfoActions.fetchProductInfo(sendParms))
        }
    }, [dispatch, sendParms, i18n.language])

    useEffect(() => {
        if (cid && pid) {
            setSendParms({
                cid,
                pid,
            })
        }
    }, [dispatch, cid, pid])
}
