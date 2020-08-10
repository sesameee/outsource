import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ForgotPasswordActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useForgotPassword = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ForgotPasswordActions.fetchForgotPassword({ phone: '1', rocId: '1' }))
    }, [dispatch, i18n.language])
}
