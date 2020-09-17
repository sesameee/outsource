import Login from './Login'
import Register from './Register'
import React, { memo } from 'react'
import Tab, { tabDataVo } from '../commons/Tab'
import { useTranslation } from '@/I18n'

type MemberTabProps = {
    setPropIsOpenFn: any
}

const MemberTab: React.FC<MemberTabProps> = ({ setPropIsOpenFn }: MemberTabProps) => {
    const { t } = useTranslation()
    const TabData: tabDataVo[] = [
        {
            title: t('login'),
            content: <Login setPropIsOpenFn={setPropIsOpenFn} setStep={null} />,
        },
        {
            title: t('register'),
            content: <Register setPropIsOpenFn={setPropIsOpenFn} />,
        },
    ]

    return <Tab tabData={TabData}></Tab>
}

export default memo(MemberTab)
