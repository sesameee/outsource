import Login from './Login'
import Register from './Register'
import React, { memo } from 'react'
import Tab, { tabDataVo } from '../commons/Tab'
import { useTranslation } from '@/I18n'

const MemberTab: React.FC = () => {
    const { t } = useTranslation()
    const TabData: tabDataVo[] = [
        {
            title: t('login'),
            content: <Login />,
        },
        {
            title: t('register'),
            content: <Register />,
        },
    ]

    return <Tab tabData={TabData}></Tab>
}

export default memo(MemberTab)
