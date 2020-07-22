import React, { memo } from 'react'
import ItemList from './ItemList'
import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { useSelector } from 'react-redux'

const ChannelList: React.FC = () => {
    useChannelList()
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    console.log('channelList :>> ', channelList)
    return (
        <ul className="menu sf-arrows">
            {channelList.map((item, index) => {
                return <ItemList cName={item.channelName} cData={item.categoryList} key={index} />
            })}
        </ul>
    )
}

export default ChannelList
