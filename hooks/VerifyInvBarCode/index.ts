import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { VerifyInvBarCodeActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useVerifyInvBarCode = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(VerifyInvBarCodeActions.fetchVerifyInvBarCode({
            memberId: '1',
            barCode: '1',
            accessToken: '1',
        }))
    }, [dispatch, i18n.language])
}
