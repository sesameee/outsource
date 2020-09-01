import React, { memo } from 'react'
import TopHeader from './TopHeader'
import MyModal from '../MyModal'
import MemberTab from '@/components/Member/MemberTab'
import ChannelList from './ChannelList'
import HoverItemList from './HoverItemList'
import Link from 'next/link'
import Cart from './Cart'
import Wish from './Wish'
import MobileMenu from './MobileMenu'
import ErrorAlert from '../commons/ErrorAlert'
import { useUserLoginHandler } from '@/hooks/UserLogin'
import { useWishList } from '@/hooks/Wish'
import { useSelector } from 'react-redux'
import { UserLoginSelectors } from '@/store'
import { UseLoginDialog } from '@/hooks/LoginDialog'

type HeaderProps = {
    isIndex: boolean
}

const Header: React.FC<HeaderProps> = ({ isIndex }: HeaderProps) => {
    useWishList()
    const { IsOpenMember, setIsOpenMember } = UseLoginDialog()
    const [itemHoverIndex, setItemHoverIndex] = React.useState<null | number>(null)
    const [IsOpenMenu, setIsOpenMenu] = React.useState(false)
    const headerClass = isIndex ? 'header header-9' : 'header'
    const { UseAuthHandle } = useUserLoginHandler()
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    UseAuthHandle()
    return (
        <header className={headerClass}>
            <MobileMenu IsOpenMenu={IsOpenMenu} setIsOpenMenu={setIsOpenMenu} />
            {!isIndex && <TopHeader />}
            <MyModal
                content={<MemberTab setPropIsOpenFn={setIsOpenMember} />}
                isOpen={IsOpenMember}
                setPropIsOpenFn={setIsOpenMember}
            />
            <div className="header-middle sticky-header custom-header">
                <ErrorAlert />
                <HoverItemList itemHoverIndex={itemHoverIndex} setItemHoverIndex={setItemHoverIndex} />
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" onClick={() => setIsOpenMenu(true)}>
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/breezeonline_logo.png" alt="Molla Logo" width="140" height="25" />
                            </a>
                        </Link>
                    </div>
                    <div className="header-right">
                        <nav className="main-nav">
                            <ChannelList setItemHoverIndex={setItemHoverIndex} />
                        </nav>
                        <Wish />
                        <Cart setIsOpenMember={setIsOpenMember} />
                        {getUser.accessToken ? (
                            <Link href="/member/points" prefetch={false}>
                                <a className="wishlist-link">
                                    <i className="icon-user"></i>
                                </a>
                            </Link>
                        ) : (
                            <a onClick={() => setIsOpenMember(true)} className="wishlist-link">
                                <i className="icon-user"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)
