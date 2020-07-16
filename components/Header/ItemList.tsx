import React, { memo } from 'react'
import ItemSubList from './ItemSubList'

const ItemList: React.FC = () => {
  return (
    <li className="megamenu-container active">
      <a href="product.html" className="sf-with-ul">
        Product
      </a>
      <div className="megamenu megamenu-sm">
        <div className="sub-container no-gutters">
          <ItemSubList />
          <ItemSubList />
          <ItemSubList />
          <ItemSubList />
        </div>
      </div>
    </li>
  )
}

export default memo(ItemList)
