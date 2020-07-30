import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BreezeDailyActions } from '@/store'

export const useBreezeDaily = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BreezeDailyActions.fetchBreezeDailyList())
    }, [dispatch])
}
