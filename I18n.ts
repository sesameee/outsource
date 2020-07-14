import NextI18Next from 'next-i18next'
import Backend from 'i18next-http-backend'
const localePath = 'public/locales'
const localeStructure = '{{lng}}/{{ns}}'
const localeExtension = 'json'
const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'tw',
  defaultNS: 'translations',
  otherLanguages: ['en'],
  use: [Backend],
  backend: {
    queryStringParams: { buildId: process.env.BUILD_ID },
    loadPath: `http://aaa.com/${localePath}/${localeStructure}.${localeExtension}`,
    addPath: `/${localePath}/${localeStructure}.missing.${localeExtension}`,
  },
})

export const { appWithTranslation, useTranslation } = NextI18NextInstance

export default NextI18NextInstance
