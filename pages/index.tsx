import React from 'react'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import Footer from '@/components/Footer'
import { NextPage } from 'next'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'

const TopPage: NextPage<any> = (): JSX.Element => {
    useBackBtnDetect()
    return (
        <div className="page-wrapper">
            <Header isIndex={true} />
            <Main />
            <Footer />
        </div>
    )
}
export default TopPage
