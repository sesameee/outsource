import React, { memo } from 'react'
import { FilterType } from '@/types/Common'
import { useTranslation } from '@/I18n'

type SortProps = {
    sortSelect: FilterType
    setsortSelect: React.Dispatch<React.SetStateAction<any>>
}
const SortSelect: React.FC<SortProps> = ({ sortSelect, setsortSelect }: SortProps) => {
    const { t } = useTranslation()
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
                    {t('sort4')}
                </option>
                <option value={FilterType.PRICE_DESCENDING}>{t('sort3')}</option>
                <option value={FilterType.TIME_NEW_TO_OLD}>{t('sort1')}</option>
                <option value={FilterType.TIME_OLD_TO_NEW}>{t('sort2')}</option>
            </select>
        </div>
    )
}

export default memo(SortSelect)
