import React, { memo } from 'react'
import { navData } from '@/types/components/nav'
import Link from 'next/link'

type NavProps = {
    navData: navData[]
}

const Nav: React.FC<NavProps> = ({ navData }: NavProps) => {
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
                <ol className="breadcrumb">
                    {navData.map((item: navData, index) => {
                        const isLastIndex = navData.length - 1 == index
                        const liClass = isLastIndex ? 'breadcrumb-item active' : 'breadcrumb-item'
                        return (
                            <li className={liClass} key={index}>
                                {item.link ? <Link href={item.link}>{item.title}</Link> : item.title}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </nav>
    )
}

export default memo(Nav)
