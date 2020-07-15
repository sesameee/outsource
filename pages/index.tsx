import React from 'react'
//import Link from 'next/link'

import Header from '@/components/Header'
import Main from '@/components/Index/Main'
import { withTranslation, i18n } from '@/I18n'
console.log('i18n :>> ', i18n)
const TopPage = ({ t }) => {
  console.log('t  :>> ', t)
  return (
    <div className="page-wrapper">
      <Header />
      <a>{t('aaa')}</a>
      <Main />
    </div>
  )
}
export default withTranslation('translations')(TopPage)
