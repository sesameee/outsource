import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserRegisterActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useUserRegister = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            UserRegisterActions.fetchUserRegister({
                name: '1',
                phoneCode: '1',
                phone: '1',
                email: '1',
                pwd1: '1',
                pwd2: '1',
                registerFrom: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
