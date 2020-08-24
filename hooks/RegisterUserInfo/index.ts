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
                memberId: '',
                rocId: '',
                sex: '',
                cityCode: 0,
                areaCode: 0,
                address: '',
                accessToken: '',
            }),
        )
    }, [dispatch, i18n.language])
}
