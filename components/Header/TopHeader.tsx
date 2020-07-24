import React, { memo } from 'react'
import { i18n } from '@/I18n'
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
                                    <a onClick={() => i18n.changeLanguage('en')}>English</a>
                                </li>
                                <li>
                                    <a onClick={() => i18n.changeLanguage('tw')}>中文</a>
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
