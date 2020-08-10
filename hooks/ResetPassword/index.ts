import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ResetPasswordActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useResetPassword = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            ResetPasswordActions.fetchResetPassword({
                memberId: '1',
                phone: '1',
                pwd1: '1',
                pwd2: '1',
                type: 0,
            }),
        )
    }, [dispatch, i18n.language])
}
