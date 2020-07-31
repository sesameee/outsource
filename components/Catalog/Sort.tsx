import React, { memo } from 'react'
import { TFunction } from 'next-i18next'
import { FilterType } from '@/types/Common'

type SortProps = {
    t: TFunction
    sortSelect: FilterType
    setsortSelect: React.Dispatch<React.SetStateAction<any>>
}
const SortSelect: React.FC<SortProps> = ({ t, sortSelect, setsortSelect }: SortProps) => {
    return (
        <div className="select-custom">
            <select
                name="sortby"
                id="sortby"
                className="form-control"
                value={sortSelect}
                onChange={(e) => setsortSelect(e.target.value)}
            >
                <option value={FilterType.PRICE_ASCENDING} defaultChecked={true}>
                    {t('sort1')}
                </option>
                <option value={FilterType.PRICE_DESCENDING}>{t('sort2')}</option>
                <option value={FilterType.TIME_NEW_TO_OLD}>{t('sort3')}</option>
                <option value={FilterType.TIME_OLD_TO_NEW}>{t('sort4')}</option>
            </select>
        </div>
    )
}

export default memo(SortSelect)
