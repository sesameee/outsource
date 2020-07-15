import NextI18Next from 'next-i18next'
import Backend from 'i18next-http-backend'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'tw',
  defaultNS: 'translations',
  otherLanguages: ['en'],
  serverLanguageDetection: true,
  use: [Backend],
  backend: {
    loadPath: 'https://sesameee.github.io/locales/{{lng}}/{{ns}}.json',
    parse: JSON.parse,
  },
})

export const { appWithTranslation, useTranslation, withTranslation, i18n } = NextI18NextInstance
i18n.changeLanguage('tw')
export default NextI18NextInstance
