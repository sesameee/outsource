import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserDataActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useUserInfo = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UserDataActions.fetchUserData({ memberId: '', accessToken: '' }))
    }, [dispatch, i18n.language])
}
