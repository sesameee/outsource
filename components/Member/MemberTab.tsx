import Login from './Login'
import Register from './Register'
import React, { memo } from 'react'
import Tab, { tabDataVo } from '../commons/Tab'

const MemberTab: React.FC = () => {
    const TabData: tabDataVo[] = [
        {
            title: 'Sign In',
            content: <Login />,
        },
        {
            title: 'Register',
            content: <Register />,
        },
    ]

    return <Tab tabData={TabData}></Tab>
}

export default memo(MemberTab)
