import React, { memo } from 'react'
import ItemList from '../WishList/ItemList'
import { useTranslation } from '@/I18n'

const WishList: React.FC = () => {
    const { t } = useTranslation()
    return (
        <table className="table table-wishlist table-mobile">
            <thead>
                <tr>
                    <th>{t('commodity_name')}</th>
                    <th>{t('commodity_price_2')}</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <ItemList />
        </table>
    )
}

export default memo(WishList)
