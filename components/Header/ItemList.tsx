import React, { memo } from 'react'
import ItemSubList from './ItemSubList'
import { CategoryData } from '@/types/apis/channelList'
type ItemListProps = {
    cName: string
    cData: CategoryData[]
}
const ItemList: React.FC<ItemListProps> = ({ cName, cData }: ItemListProps) => {
    return (
        <li className="megamenu-container active">
            <a href="product.html" className="sf-with-ul">
                {cName}
            </a>
            <div className="megamenu megamenu-sm">
                <div className="sub-container no-gutters">
                    {cData.map((item, index) => {
                        return <ItemSubList key={index} cName={item.cName} cData={item.cData} />
                    })}
                </div>
            </div>
        </li>
    )
}

export default memo(ItemList)
