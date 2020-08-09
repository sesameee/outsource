import React from 'react'
import { ProSidebar, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar'
import { useChannelList } from '@/hooks/ChannelList'
import { useSelector } from 'react-redux'
import { ChannelListSelectors } from '@/store'
import Link from 'next/link'
//import { ProductData } from '@/types/apis/common'

type MobileMenuProps = {
    IsOpenMenu: boolean
    setIsOpenMenu: React.Dispatch<React.SetStateAction<any>>
}
const MobileMenu: React.FC<MobileMenuProps> = ({ IsOpenMenu, setIsOpenMenu }: MobileMenuProps) => {
    useChannelList()
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const [IsOpenSubMenu, setIsOpenSunMenu] = React.useState(false)
    const [subMenuIndex, setsubMenuIndex] = React.useState(0)
    const handelSubMenu = (index: number) => {
        setIsOpenSunMenu(true)
        setsubMenuIndex(index)
    }
    return (
        <div className="mobile-menu">
            <MobileSubMenu IsOpenMenu={IsOpenSubMenu} setIsOpenMenu={setIsOpenSunMenu} subMenuIndex={subMenuIndex} />
            <ProSidebar breakPoint="md" toggled={IsOpenMenu} onToggle={setIsOpenMenu}>
                <SidebarHeader>
                    <div className="header">分類總覽</div>
                </SidebarHeader>
                <SidebarContent>
                    <ul>
                        {channelList.map((item, index) => {
                            return (
                                <li key={index} className="menu-li" onClick={() => handelSubMenu(index)}>
                                    {item.channelName} <i className="demo-icon icon-angle-right"></i>
                                </li>
                            )
                        })}
                    </ul>
                </SidebarContent>
                <SidebarFooter>
                    <div>語言: 中文</div>
                    <button
                        type="button"
                        className="btn btn-outline-primary-2 btn-block"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <span>返回</span>
                    </button>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

type MobileSubMenuProps = {
    IsOpenMenu: boolean
    setIsOpenMenu: React.Dispatch<React.SetStateAction<any>>
    subMenuIndex: number
}

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({
    IsOpenMenu,
    setIsOpenMenu,
    subMenuIndex,
}: MobileSubMenuProps) => {
    const [tabIndex, setTabIndex] = React.useState(0)
    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const subList = channelList[subMenuIndex]
    return (
        <div className="mobile-menu zindexHigh">
            <ProSidebar breakPoint="md" toggled={IsOpenMenu} onToggle={setIsOpenMenu}>
                <SidebarHeader>
                    <div onClick={() => setIsOpenMenu(false)}>
                        <i className="demo-icon icon-angle-left"></i>
                        {subList?.channelName}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <div className="accordion" id="accordion-1">
                        {subList?.categoryList.map((item, index) => {
                            return (
                                <div key={index} className="card">
                                    <div className="card-header" id="heading-1">
                                        <h2 className="card-title">
                                            {item.cData.length ? (
                                                <a
                                                    role="button"
                                                    data-toggle="collapse"
                                                    className={tabIndex == index ? '' : 'collapsed'}
                                                    onClick={() => setTabIndex(index)}
                                                >
                                                    {item.cName}
                                                </a>
                                            ) : (
                                                <div className="no-arrow">
                                                    <Link href={`/category/${subList.cid}/${item.cid}`}>
                                                        {item.cName}
                                                    </Link>
                                                </div>
                                            )}
                                        </h2>
                                    </div>
                                    {item.cData.length ? (
                                        <div
                                            id="collapse-1"
                                            className={tabIndex == index ? 'collapse show' : 'collapse'}
                                        >
                                            <div className="card-body">
                                                <ul>
                                                    {item.cData.map((subItem, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link
                                                                    href={`/category/${subList.cid}/${item.cid}/${subItem.cid}`}
                                                                >
                                                                    {subItem.cName}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <> </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}

export default MobileMenu
