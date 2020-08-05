import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MemberAddressInfoActions } from '@/store'
import { useTranslation } from '@/I18n'

export const usePromoCode = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            MemberAddressInfoActions.fetchMemberAddressInfo({
                memberId: '1',
                category: 1,
                accessToken: '1',
            }),
        )
    }, [dispatch, i18n.language])
}
