import React, { memo } from 'react'

import ItemList from '../WishList/ItemList'
const WishList: React.FC = () => {
    return (
        <table className="table table-wishlist table-mobile">
            <thead>
                <tr>
                    <th>商品名稱</th>
                    <th>商品售價</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <ItemList />
        </table>
    )
}

export default memo(WishList)
