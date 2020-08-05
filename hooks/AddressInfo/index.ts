import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AddressInfoActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useAddressInfo = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AddressInfoActions.fetchAddressInfo())
    }, [dispatch, i18n.language])
}
