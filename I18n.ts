import NextI18Next from 'next-i18next'
import Backend from 'i18next-http-backend'
const DEFAULT_LANFUAGE = 'tw'
const NextI18NextInstance = new NextI18Next({
    defaultLanguage: DEFAULT_LANFUAGE,
    defaultNS: 'translations',
    otherLanguages: ['en'],
    preload: [DEFAULT_LANFUAGE],
    use: [Backend],
    backend: {
        loadPath: 'https://sesameee.github.io/locales/{{lng}}/{{ns}}.json',
        parse: JSON.parse,
    },
})

export const { appWithTranslation, useTranslation, withTranslation, i18n } = NextI18NextInstance
export default NextI18NextInstance
