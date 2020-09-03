import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BreezeDailyActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useBreezeDaily = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BreezeDailyActions.fetchBreezeDailyList())
        return function cleanup() {
            dispatch(BreezeDailyActions.stopFetchBreezeDailyList())
        }
    }, [dispatch, i18n.language])
}
