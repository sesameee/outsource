import React, { memo } from 'react'
const TopHeader: React.FC = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <div className="header-dropdown">
                        <a href="#">中文</a>
                        <div className="header-menu">
                            <ul>
                                <li>
                                    <a href="#">English</a>
                                </li>
                                <li>
                                    <a href="#">中文</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(TopHeader)
