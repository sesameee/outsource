import React, { memo, useEffect, useState } from 'react'
import { i18n } from '@/I18n'
import { setCookie } from '@/utils'

const TopHeader: React.FC = () => {
    const [lan, setLan] = useState(i18n.language)
    const [text, setText] = useState('')
    useEffect(() => {
        setLan(i18n.language)
        if (lan == 'tw') {
            return setText('中文')
        } else {
            return setText('English')
        }
    }, [lan])

    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <div className="header-dropdown">
                        <a href="#">{text}</a>
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
                </div>
            </div>
        </div>
    )
}

export default memo(TopHeader)
