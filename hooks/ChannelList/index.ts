import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from '@/I18n'
import { ChannelListActions } from '@/store'

export const useChannelList = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ChannelListActions.fetchChannelList())
    }, [dispatch, i18n.language])
}
