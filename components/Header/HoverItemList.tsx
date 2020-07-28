import React, { memo } from 'react'
import { ChannelListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import ItemSubList from './ItemSubList'
type HoverItemListProps = {
    itemHoverIndex: null | number
}
const HoverItemList: React.FC<HoverItemListProps> = ({ itemHoverIndex }: HoverItemListProps) => {
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    return (
        <ul className="menu sf-arrows">
            {channelList.map((item, index) => {
                return (
                    <div
                        className="megamenu megamenu-sm"
                        key={index}
                        style={{ display: itemHoverIndex == index ? 'block' : 'none' }}
                    >
                        <div className="sub-container no-gutters">
                            {item &&
                                item.categoryList.map((SubItem, index) => {
                                    return (
                                        <ItemSubList
                                            key={index}
                                            cName={SubItem.cName}
                                            cData={SubItem.cData}
                                            cPId={item.cid}
                                            cId={SubItem.cid}
                                        />
                                    )
                                })}
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}

export default memo(HoverItemList)
