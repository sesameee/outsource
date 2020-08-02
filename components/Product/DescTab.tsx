import React, { memo } from 'react'
import Tab, { tabDataVo } from '../commons/TabForProduct'
import { useTranslation } from '@/I18n'
import DescProduct from './DescProduct'
import DescNotice from './DescNotice'

const DescTab: React.FC = () => {
    const { t } = useTranslation()
    const TabData: tabDataVo[] = [
        {
            title: t('desc_product'),
            content: <DescProduct />,
        },
        {
            title: t('desc_notice'),
            content: <DescNotice />,
        },
    ]

    return <Tab tabData={TabData}></Tab>
}

export default memo(DescTab)
