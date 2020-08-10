import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RegisterUserInfoActions } from '@/store'
import { useTranslation } from '@/I18n'

export const useRegisterUserInfo = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            RegisterUserInfoActions.fetchRegisterUserInfo({
                memberId: '1',
                rocId: '1',
                sex: '1',
                cityCode: 0,
                areaCode: 0,
                address: '1',
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
