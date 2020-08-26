import React, { memo } from 'react'
import { useUserPoints } from '@/hooks/UserPoints'
import { UserPointsSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'
// import { CategoryData } from '@/types/apis/channelList'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

const Points: React.FC = () => {
    useUserPoints()
    const { t } = useTranslation()
    const userPoints = useSelector(UserPointsSelectors.userPoints)
    console.log('userPoints :>> ', userPoints)

    return (
        <div className="point-frame">
            <h3 className="title">{t('my_remaining_point')}</h3>
            <h1 className="points">
                <span className="main-color">{userPoints.totalPoints}</span> <b> {t('point')} </b>
            </h1>
            <h4 className="tips">
                <span className="main-color">{userPoints.expiryPoints}</span>
                <b> {t('point')} </b>{t('will_be')} {userPoints.expiryDate} {t('expire')}
            </h4>
        </div>
    )
}

export default memo(Points)
