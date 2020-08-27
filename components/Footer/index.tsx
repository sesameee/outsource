import React, { memo } from 'react'
import { withTranslation } from '@/I18n'
import { TFunction } from 'next-i18next'
import Link from 'next/link'
import MyModal from '../MyModal'
import { encodeToken } from '@/utils'

type FooterProps = {
    t: TFunction
}
const Footer: React.FC<FooterProps> = ({ t }: FooterProps) => {
    const [IsOpenService, setIsOpenService] = React.useState(false)
    const [IsOpenPrivacy, setIsOpenPrivacy] = React.useState(false)
    console.log(
        'encodeToken :>> ',
        encodeToken(
            'ThbTYBe/GOvKK3S0IKCAgwoL+Wfyj0/APHpNikOVBraPY6sF41d9S2C5e9N9encs67Dmf/jSB5l9/olBxiCjX4Xi2wJbGw5oJ+LSddfTzQSqesE3KjP5HCxTe+F3wT18uWsDnSbMxCdVmum0Rf7p/oZazEOMpnjWAOYlSJpqBEw=;16f1fddd-51ba-4835-b069-968d8ecd8aba;1598509912623;cd5b5293-6355-45e9-8b42-70e95d5a1adc',
        ),
    )

    return (
        <footer className="footer">
            <MyModal
                content={
                    <iframe
                        style={{ width: '80vw', height: '80vh', padding: '3rem', border: 'none' }}
                        src="/html/service.html"
                    ></iframe>
                }
                isOpen={IsOpenService}
                setPropIsOpenFn={setIsOpenService}
            />
            <MyModal
                content={
                    <iframe
                        style={{ width: '80vw', height: '80vh', padding: '3rem', border: 'none' }}
                        src="/html/privacy.html"
                    ></iframe>
                }
                isOpen={IsOpenPrivacy}
                setPropIsOpenFn={setIsOpenPrivacy}
            />
            <div className="container">
                <div className="footer-frame">
                    <div className="left-item">
                        <dl>
                            <dt>{t('store_info')}</dt>
                            <dd>
                                <a href="https://www.breezecenter.com/branches/001" target="blank">
                                    {t('store_location')}
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{t('customer_service')}</dt>
                            <dd>
                                <a href="#" onClick={() => window.open('mailto:xxxx@breeze.com')}>
                                    {t('contact_us')}
                                </a>
                            </dd>
                            <dd>
                                <Link href="/faq">{t('q_n_a')}</Link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{t('shopping_online')}</dt>
                            <dd>
                                <a href="#" onClick={() => setIsOpenPrivacy(true)}>
                                    {t('privacy_policy')}
                                </a>
                            </dd>
                            <dd>
                                <a href="#" onClick={() => setIsOpenService(true)}>
                                    {t('terms_of_service')}
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{t('about_us')}</dt>
                            <dd>
                                <Link href="/about">{t('about_breeze')}</Link>
                            </dd>
                            <dd>
                                <a href="https://www.breezedaily.com.tw/" target="blank">
                                    {t('breezedaily')}
                                </a>
                            </dd>
                        </dl>
                    </div>

                    <div className="right-item">
                        <div className="app-frame">
                            <div className="app-text">{t('download_our_ios_app')}</div>
                            <img className="app-img margin-bottom" src="/images/custom/appstore_ios.png" />
                        </div>
                        <div className="app-frame">
                            <div className="app-text">{t('download_our_android_app')}</div>
                            <img className="app-img" src="/images/custom/appstore_android.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <img className="logo" src="/images/breezeonline_logo.png" />
                <div className="info">
                    <p>{t('breeze_couture')}</p>
                    <p>{t('company_address')}</p>
                    <p>{t('customer_service_number')}</p>
                </div>
            </div>
        </footer>
    )
}

export default withTranslation('translations')(memo(Footer))
