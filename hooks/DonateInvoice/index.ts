import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { DonateInvoiceActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useDonateInvoice = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(DonateInvoiceActions.fetchDonateInvoice())
    }, [dispatch, i18n.language])
}
