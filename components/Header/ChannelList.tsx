import React from 'react'
import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import Link from 'next/link'
type ChannelListProps = {
    setItemHoverIndex: React.Dispatch<React.SetStateAction<null | number>>
}
const ChannelList: React.FC<ChannelListProps> = ({ setItemHoverIndex }: ChannelListProps) => {
    useChannelList()
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    console.log('channelList :>> ', channelList)
    function handleMouse(index: any) {
        setItemHoverIndex(index)
    }
    return (
        <ul className="menu sf-arrows">
            {channelList.map((item, index) => {
                return (
                    <li
                        className="megamenu-container"
                        key={index}
                        onMouseOver={() => handleMouse(index)}
                        onMouseLeave={() => handleMouse(null)}
                    >
                        <Link href={`/category/${item.cid}`}>
                            <a className="sf-with-ul">{item.channelName}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ChannelList
