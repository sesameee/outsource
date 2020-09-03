import React, { useEffect, useState } from 'react'
import { ProSidebar, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar'
import { useChannelList } from '@/hooks/ChannelList'
import { useSelector } from 'react-redux'
import { ChannelListSelectors } from '@/store'
import Link from 'next/link'
import { useTranslation, i18n } from '@/I18n'
import { setCookie } from '@/utils'
import { useRouter } from 'next/router'
//import { ProductData } from '@/types/apis/common'

type MobileMenuProps = {
    IsOpenMenu: boolean
    setIsOpenMenu: React.Dispatch<React.SetStateAction<any>>
}
const MobileMenu: React.FC<MobileMenuProps> = ({ IsOpenMenu, setIsOpenMenu }: MobileMenuProps) => {
    useChannelList()
    const { t } = useTranslation()

    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const [IsOpenSubMenu, setIsOpenSunMenu] = React.useState(false)
    const [subMenuIndex, setsubMenuIndex] = React.useState(0)
    const handelSubMenu = (index: number) => {
        setIsOpenSunMenu(true)
        setsubMenuIndex(index)
    }
    const router = useRouter()
    const [lan, setLan] = useState(i18n.language)
    useEffect(() => {
        setLan(i18n.language)
    }, [])
    return (
        <div className="mobile-menu">
            <MobileSubMenu IsOpenMenu={IsOpenSubMenu} setIsOpenMenu={setIsOpenSunMenu} subMenuIndex={subMenuIndex} />
            <ProSidebar breakPoint="md" toggled={IsOpenMenu} onToggle={setIsOpenMenu}>
                <SidebarHeader>
                    <div className="header">{t('category_overview')}</div>
                </SidebarHeader>
                <SidebarContent>
                    <ul>
                        {channelList.map((item, index) => {
                            return (
                                <li key={index} className={`menu-li ${item.isMarkColor ? 'highlight-color' : ''}`}>
                                    <span onClick={() => router.push(`/category/${item.cid}`)}>{item.channelName}</span>
                                    <i className="demo-icon icon-angle-right" onClick={() => handelSubMenu(index)}></i>
                                </li>
                            )
                        })}
                    </ul>
                </SidebarContent>
                <SidebarFooter>
                    <div className="header-dropdown">
                        <a href="#">{lan == 'tw' ? '中文' : 'English'}</a>
                        <div className="header-menu">
                            <ul>
                                <li>
                                    <a
                                        onClick={() => {
                                            setLan('en')
                                            i18n.changeLanguage('en')
                                            setCookie('i18n', 'en')
                                        }}
                                    >
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => {
                                            setLan('tw')
                                            i18n.changeLanguage('tw')
                                            setCookie('i18n', 'tw')
                                        }}
                                    >
                                        中文
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-primary-2 btn-block"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <span>{t('return')}</span>
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
                        <i className="demo-icon icon-angle-left" style={{ margin: '0 1rem' }}></i>
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
                                                    onClick={() =>
                                                        tabIndex == index ? setTabIndex(-1) : setTabIndex(index)
                                                    }
                                                >
                                                    <Link
                                                        href={`/category/${subList.cid}/${item.cid}`}
                                                        prefetch={false}
                                                    >
                                                        <span>{item.cName}</span>
                                                    </Link>
                                                </a>
                                            ) : (
                                                <div className="no-arrow">
                                                    <Link
                                                        href={`/category/${subList.cid}/${item.cid}`}
                                                        prefetch={false}
                                                    >
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
                                                                    prefetch={false}
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
