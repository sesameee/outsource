import React, { memo } from 'react'
import ItemSubList from './ItemSubList'
import { CategoryData } from '@/types/apis/channelList'
import Link from 'next/link'
type ItemListProps = {
    cName: string
    cData: CategoryData[]
    cId: string
}
const ItemList: React.FC<ItemListProps> = ({ cName, cData, cId = '01' }: ItemListProps) => {
    return (
        <li className="megamenu-container active">
            <Link href={`/category/${cId}`} >
                <a className="sf-with-ul">{cName}</a>
            </Link>
            <div className="megamenu megamenu-sm">
                <div className="sub-container no-gutters">
                    {cData.map((item, index) => {
                        return (
                            <ItemSubList key={index} cName={item.cName} cData={item.cData} cPId={cId} cId={item.cid} />
                        )
                    })}
                </div>
            </div>
        </li>
    )
}

export default memo(ItemList)
