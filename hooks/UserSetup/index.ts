import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserSetupActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useUserSetup = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            UserSetupActions.fetchUserSetup({
                memberId: '1',
                email: '1',
                cityCode: 0,
                areaCode: 0,
                address: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
