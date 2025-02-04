import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserPointsActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useUserPoints = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UserPointsActions.fetchUserPoints({ memberId: '', accessToken: '' }))
    }, [dispatch, i18n.language])
}
