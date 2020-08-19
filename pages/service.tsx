import React from 'react'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
// import html from '@/html/service.html'
type MemberProps = {
    t: TFunction
}
const Service: React.FC<MemberProps> = ({ t }: MemberProps): JSX.Element => {
    console.log(t)
    return <div className="page-wrapper">{/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}</div>
}
export default withTranslation('translations')(Service)
