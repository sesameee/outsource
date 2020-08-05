import React, { memo } from 'react'
import TopHeader from './TopHeader'
import MyModal from '../MyModal'
import MemberTab from '@/components/Member/MemberTab'
import ChannelList from './ChannelList'
import HoverItemList from './HoverItemList'
import Link from 'next/link'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import { WishListSelectors } from '@/store'
import { useWishList } from '@/hooks/Wish'

type HeaderProps = {
    isIndex: boolean
}
const Header: React.FC<HeaderProps> = ({ isIndex }: HeaderProps) => {
    useWishList()
    const [IsOpenMember, setIsOpenMember] = React.useState(false)
    const headerClass = isIndex ? 'header header-9' : 'header'
    const [itemHoverIndex, setItemHoverIndex] = React.useState<null | number>(null)
    const wishList = useSelector(WishListSelectors.getWishList)

    return (
        <header className={headerClass}>
            {!isIndex && <TopHeader />}
            <MyModal
                content={<MemberTab setPropIsOpenFn={setIsOpenMember} />}
                isOpen={IsOpenMember}
                setPropIsOpenFn={setIsOpenMember}
            />
            <div className="header-middle sticky-header custom-header">
                <HoverItemList itemHoverIndex={itemHoverIndex} setItemHoverIndex={setItemHoverIndex} />
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
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
                        <Link href="/wishlist">
                            <a className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{wishList.total}</span>
                            </a>
                        </Link>
                        <Cart />
                        <a onClick={() => setIsOpenMember(true)} className="wishlist-link">
                            <i className="icon-user"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)
