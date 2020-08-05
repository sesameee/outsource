import React, { memo } from 'react'
import { CategoryData } from '@/types/apis/channelList'
import Link from 'next/link'
type ItemSubListProps = {
    cName: string
    cData: CategoryData[]
    cId: string
    cPId: string // 父層ID
}
const ItemSubList: React.FC<ItemSubListProps> = ({ cName, cData, cPId, cId }: ItemSubListProps) => {
    return (
        <div className="sub-item">
            <div className="menu-col">
                <Link href={`/category/${cPId}/${cId}`}>
                    <div className="menu-title">{cName}</div>
                </Link>
                <ul>
                    {cData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/category/${cPId}/${cId}/${item.cid}`}>{item.cName}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default memo(ItemSubList)
