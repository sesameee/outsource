import React, { memo } from 'react'
import ItemSubList from './ItemSubList'
import { CategoryData } from '@/types/apis/channelList'
import Link from 'next/link'
type ItemListProps = {
    cName: string
    cId: string
}
const ItemList: React.FC<ItemListProps> = ({ cName, cId = '01' }: ItemListProps) => {
    return (
        <li className="megamenu-container">
            <Link href={`/category/${cId}`}>
                <a className="sf-with-ul">{cName}</a>
            </Link>
        </li>
    )
}

export default memo(ItemList)
