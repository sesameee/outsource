import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ChannelListActions } from '@/store'

export const useChannelList = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ChannelListActions.fetchChannelList())
    }, [dispatch])
}
