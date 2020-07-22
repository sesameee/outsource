import React, { memo } from 'react'
import { CategoryData } from '@/types/apis/channelList'
type ItemSubListProps = {
    cName: string
    cData: CategoryData[]
}
const ItemSubList: React.FC<ItemSubListProps> = ({ cName, cData }: ItemSubListProps) => {
    return (
        <div className="sub-item">
            <div className="menu-col">
                <div className="menu-title">{cName}</div>
                <ul>
                    {cData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="product.html">{item.cName}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default memo(ItemSubList)
